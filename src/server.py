from flask import Flask, render_template
import glacierData

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/frontend.js")
def frontend():
    return render_template("frontend.js")


@app.route("/glacierData")
def data():
    return glacierData.reData("/Users/johntantillo1/Desktop/My Stuff/Projects/GlacierGraph/data/galcierData.csv")


@app.route("/lineData")
def linedata():
    return glacierData.lineData("/Users/johntantillo1/Desktop/My Stuff/Projects/GlacierGraph/data/galcierData.csv")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
