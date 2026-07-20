router.post("/", upload.single("image"), async (req, res) => {

    try {

        console.log("========== PREDICT ==========");
        console.log("FILE RECEIVED:", req.file);
        console.log("BODY:", req.body);
        console.log("USER ID:", req.body.userId);

        const form = new FormData();

        form.append(
            "image",
            fs.createReadStream(req.file.path)
        );

        const response = await axios.post(
            "https://medvision-ai-api-7skw.onrender.com/predict",
            form,
            {
                headers: form.getHeaders(),
            }
        );

        fs.unlinkSync(req.file.path);

        console.log("AI RESPONSE:", response.data);

        const predictionData = await Prediction.create({
            user: req.body.userId,
            disease: response.data.disease,
            confidence: response.data.confidence
        });

        res.json({
            ...response.data,
            id: predictionData._id
        });

    } catch (error) {

        console.error(
            "PREDICTION ERROR:",
            error.response?.data || error.message
        );

        res.status(500).json({
            message: "Prediction Failed",
            error: error.response?.data || error.message
        });

    }

});