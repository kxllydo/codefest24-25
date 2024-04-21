from flask import Flask, request, jsonify
import boto3
import json
import os

app = Flask(__name__)

# AWS Configuration
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_REGION = os.getenv('AWS_REGION')
SAGEMAKER_ENDPOINT_NAME = 'your_sagemaker_endpoint_name'


# Initialize SageMaker client
sagemaker_client = boto3.client('sagemaker-runtime',
                          region_name=AWS_REGION,
                          aws_access_key_id=AWS_ACCESS_KEY_ID,
                          aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

# Replace with your SageMaker endpoint name
endpoint_name = 'your-endpoint-name'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        
        #----------------------------------------------------
        # data is JSON value from Kelly. 
        #----------------------------------------------------
        data = "placeholder variable"

        # Send request to SageMaker
        response = sagemaker_client.invoke_endpoint(
            EndpointName=endpoint_name,
            ContentType='application/json',
            Body=json.dumps(data)
        )

        # Parse SageMaker response
        result = response['Body'].read().decode()
        result = json.loads(result)

        return jsonify(result), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)