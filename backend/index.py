import joblib
from flask import Flask, request, jsonify
import pandas as pd
model = joblib.load('model.pkl')
from flask_cors import CORS
from geopy.geocoders import Nominatim

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Server listening on 3001'

@app.route('/api')
def api():
    return jsonify({'message': 'Hello from server!'})

df_adoptees = pd.read_csv('available_adoptees.csv')

ethnicities = [
    'african_american',  # 0
    'arab',              # 1
    'asian',             # 2
    'caribbean',         # 3
    'caucasian',         # 4
    'hispanic_Latino',   # 5
    'indigenous',        # 6
    'middle_eastern',    # 7
    'native_american',   # 8
    'pacific_islander'   # 9
]

geolocator = Nominatim(user_agent="my_geocoder")

@app.route('/match', methods=['POST'])
def match():
    #data = request.json
    #age = data.get('AGE')
    #gender = data.get('GENDER')
    #ethnicity = data.get('ETHNICITY')
    #location = data.get('LOCATION')
    #marital_status = data.get('MARITAL_STATUS')
    #income = data.get('INCOME')
    #employed = data.get('EMPLOYED')
    #disabled = data.get('DISABLED')

    #concat into one list
    #import csv file with currernt children
    #concat the parent attributes with each row of the children
    #use ML model to predict classification
    #find the first child that yields 1 for teh classifciation

    parent_data = request.json
    if 'ethnicity' in parent_data:
        parent_data['ethnicity'] = ethnicities.index(parent_data['ethnicity'].lower())

    # Assuming parent_df columns are named correctly as per the model's training data
    parent_df = pd.DataFrame([parent_data])

    # Rename parent_df columns to match the suffixing as in training data for adult attributes
    parent_df.columns = [f'Adult {col}' for col in parent_df.columns]

    # Renaming df_adoptees columns to match the suffixing as in training data for kid attributes
    df_adoptees.columns = [f'Kid {col}' for col in df_adoptees.columns]

    # Concatenate parent data with each adoptee data
    combined_data = pd.concat([df_adoptees.assign(**parent_df.iloc[0])], axis=1)

    # Predict compatibility
    predictions = model.predict(combined_data)

    # Filter adoptees with compatibility = 1
    compatible_adoptees = combined_data[predictions == 1]
    if not compatible_adoptees.empty:
        selected_adoptee = compatible_adoptees.sample(n=1)
        selected_adoptee_dict = selected_adoptee.to_dict(orient='records')[0]
        child_data = {key.replace('Kid ', '').replace(" ", ""): value for key, value in selected_adoptee_dict.items() if key.startswith('Kid ')}
        postal_code = child_data.get("Location")  # assuming "Location" has the postal code
        if postal_code:
            location = geolocator.geocode(f"{postal_code}, USA")  # Assuming USA, adjust as necessary
            if location:
                child_data['Latitude'] = location.latitude
                child_data['Longitude'] = location.longitude
            else:
                child_data['Latitude'] = 'Not found'
                child_data['Longitude'] = 'Not found'

        response = {'adoptee_info': child_data, 'status_code': 200}
    else:
        response = {'message': 'No compatible adoptees found', 'status_code': 404}

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=3001, debug=True)
