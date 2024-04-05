from flask import Flask, jsonify
from flask_cors import CORS
from utils.hotcoldzone_stats import get_player_id, get_hotcoldzones_stats

app = Flask(__name__)
CORS(app)

@app.route('/data')
def fetch_data_route():
    id = get_player_id("Ty France")
    year = 2022
    data = get_hotcoldzones_stats(id, year)
    response = jsonify(data)
    return response

if __name__ == '__main__':
    app.run(debug=True)