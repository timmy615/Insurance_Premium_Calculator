# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from calculator import PremiumCalculator

app = Flask(__name__)
CORS(app)

calculator = PremiumCalculator("mortality_tables.xlsx")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    age = int(data.get("age"))
    gender = data.get("gender")
    coverage = int(data.get("coverage"))
    type = int(data.get("type", 3))  # 可選的，預設是3

    result = calculator.calculate_term_insurance(age, gender, coverage, type)
    return jsonify({"premium": result})

if __name__ == "__main__":
    app.run(debug=True)