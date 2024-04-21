import joblib
from flask import Flask, request, jsonify
import pandas as pd
model = joblib.load('model.pkl')

app = Flask(__name__)

@app.route('/')
def index():
    return 'Server listening on 3001'

@app.route('/api')
def api():
    return jsonify({'message': 'Hello from server!'})

df_adoptees = pd.read_csv('available_adoptees.csv')

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
    parent_df = pd.DataFrame(parent_data, index=[0])

    # Concatenate parent data with available adoptees
    combined_data = pd.concat([parent_df] * len(df_adoptees), ignore_index=True)
    combined_data = pd.concat([combined_data, df_adoptees], axis=1)

    # Predict compatibility
    predictions = model.predict(combined_data)

    # Filter adoptees with compatibility = 1
    compatible_adoptees = df_adoptees[predictions == 1]

    # Randomly select a compatible adoptee if multiple exist
    if len(compatible_adoptees) > 0:
        selected_adoptee = compatible_adoptees.sample(n=1)
        selected_adoptee_dict = selected_adoptee.to_dict(orient='records')[0]
        return jsonify(selected_adoptee_dict)
    else:
        return jsonify({'message': 'No compatible adoptees found'})

if __name__ == '__main__':
    app.run(port=3001)
