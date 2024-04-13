# StrikeZoneTracker

## Overview
**StrikeZoneTracker** is a React-based web application that visualizes batting averages across different sections of the strike zone for Major League Baseball players. Leveraging Python to fetch data from the MLB Stats API, this tool allows users to enter a player's name and select a specific year to analyze their performance hotspots and cold zones. With **StrikeZoneTracker**, fans, analysts, and enthusiasts can easily explore player strengths and weaknesses, enhancing their understanding of the game.

## Features
- **Interactive Heatmaps**: Visualize batting averages as heatmaps, showing performance variations across the strike zone.
- **Player Search**: Search for MLB players by name to retrieve specific year stats.
- **Year Selection**: Users can choose different years to view historical performance data.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Usage

### Prerequisites
- Ensure you have Node.js and Python installed on your system.

### Setup and Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/StrikeZoneTracker.git
    ```

2. **Set up the backend server:**
    ```bash
    cd StrikeZoneTracker/backend
    python server.py
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../client
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Accessing the App:**
    Open your web browser and navigate to http://localhost:3000 to use the application.

## Technologies
- **Frontend**: React.js, HTML/CSS, Plotly.js
- **Backend**: Python, Flask
- **APIs**: MLB Stats API

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, features, or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Note on Data Usage
The MLB Stats API is used for data retrieval in this project. Please refer to the [MLB Stats API Terms of Use](https://statsapi.mlb.com/docs/#section/terms) for licensing information and usage restrictions.
