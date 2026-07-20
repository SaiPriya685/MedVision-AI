const Prediction = require("../models/Prediction");
const express = require("express");
const router = express.Router();

const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {

    try {

        const form = new FormData();

        form.append(
            "image",
            fs.createReadStream(req.file.path)
        );

        const response = await axios.post(
            "http://127.0.0.1:8000/predict",
            form,
            {
                headers: form.getHeaders(),
            }
        );

        fs.unlinkSync(req.file.path);

        const predictionData = await Prediction.create({

    user:req.body.userId,

    disease:response.data.disease,

    confidence:response.data.confidence

});


res.json({

    ...response.data,

    id:predictionData._id

});

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            message: "Prediction Failed",
        });

    }

});

module.exports = router;