from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.hotcoldzone_stats import get_player_id, get_hotcoldzones_stats

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['POST'])
def fetch_data_route():
    request_data = request.get_json()
    playerName = request_data.get('playerName')
    year = request_data.get('year')

    if not playerName or not year:
        return jsonify({'error': 'Player name and year are required'}), 400

    player_id = get_player_id(playerName)
    if player_id is None:
        return jsonify({'error': 'Player not found'}), 404

    data = get_hotcoldzones_stats(player_id, year)
    if data is None:
        return jsonify({'error': 'Data not found'}), 404

    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)