from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="MedVision AI",
    version="1.0.0"
)

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to MedVision AI 🚑"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Read uploaded image
    image_bytes = await file.read()

    print("Received file:", file.filename)
    print("File size:", len(image_bytes), "bytes")

    # Temporary response
    # Later we will connect your AI model here

    return {
        "filename": file.filename,
        "prediction": "Normal",
        "confidence": 0.95,
        "message": "Prediction completed successfully"
    }