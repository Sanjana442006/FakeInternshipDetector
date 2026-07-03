from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InternshipRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "InternShield AI Backend Running"}

@app.post("/analyze")
def analyze(data: InternshipRequest):
    text = data.text.lower()

    risk = 10
    red_flags = []

    if "registration fee" in text:
        risk += 40
        red_flags.append("Registration fee detected")

    if "guaranteed placement" in text:
        risk += 30
        red_flags.append("Guaranteed placement claim")

    if "earn ₹" in text or "earn rs" in text:
        risk += 15
        red_flags.append("Unrealistic earning promise")

    if risk >= 70:
        status = "High Risk"
        recommendation = "Avoid this internship."
    elif risk >= 40:
        status = "Medium Risk"
        recommendation = "Verify before applying."
    else:
        status = "Low Risk"
        recommendation = "Looks relatively safe."

    return {
        "riskScore": risk,
        "status": status,
        "redFlags": red_flags,
        "recommendation": recommendation
    }