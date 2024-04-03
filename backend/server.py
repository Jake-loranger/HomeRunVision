from flask import Flask
from flask_cors import CORS
import datetime
 
x = datetime.datetime.now()
 
app = Flask(__name__)
CORS(app)
 
@app.route('/data')
def get_time():
    return {
        'Name':"geek", 
        "Age":"23",
        "Date":x, 
        "programming":"python"
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)