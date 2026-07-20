import os
import shutil

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from predict import predict_disease


app = FastAPI(
    title="MedVision AI API"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)



@app.get("/")
def home():

    return {
        "message":
        "MedVision AI API Running"
    }



@app.post("/predict")
async def predict(
    image: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        image.filename
    )


    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            image.file,
            buffer
        )


    result = predict_disease(
        file_path
    )


    os.remove(
        file_path
    )


    return result