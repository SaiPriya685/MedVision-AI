import numpy as np
import os
import numpy as np

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image


MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "medvision_model.h5"
)


# Load model only once
model = load_model(MODEL_PATH)

IMG_SIZE = 150

CLASS_NAMES = {
    0: "NORMAL",
    1: "PNEUMONIA"
}


def predict_disease(img_path):
    img = image.load_img(img_path, target_size=(IMG_SIZE, IMG_SIZE))

    img_array = image.img_to_array(img)

    img_array = img_array / 255.0

    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)

    probability = float(prediction[0][0])

    if probability > 0.5:
        disease = "PNEUMONIA"
        confidence = probability * 100
    else:
        disease = "NORMAL"
        confidence = (1 - probability) * 100

    return {
        "disease": disease,
        "confidence": round(confidence, 2)
    }