from flask import Flask, jsonify 

app = Flask(__name__)

@app.route('/')
def index():
    return 'Server listening on 3001'

@app.route('/api')
def api():
    return jsonify({'message': 'Hello from server!'})

if __name__ == '__main__':
    app.run(port=3001)
