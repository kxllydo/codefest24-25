import joblib
from flask import request, jsonify

model = joblib.load('model.pkl')

app = Flask(__name__)

@app.route('/')
def index():
    return 'Server listening on 3001'

@app.route('/api')
def api():
    return jsonify({'message': 'Hello from server!'})


from flask import request, jsonify

@app.route('/match', methods=['POST'])
def match():
    data = request.json
    age = data.get('AGE')
    gender = data.get('GENDER')
    ethnicity = data.get('ETHNICITY')
    location = data.get('LOCATION')
    marital_status = data.get('MARITAL_STATUS')
    income = data.get('INCOME')
    employed = data.get('EMPLOYED')
    disabled = data.get('DISABLED')
    


if __name__ == '__main__':
    app.run(port=3001)
