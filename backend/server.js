require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const predictionRoutes = require("./routes/prediction");
const historyRoutes = require("./routes/history");

const app = express();


connectDB();


app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoutes);

app.use("/api/predict", predictionRoutes);

app.use("/api/history", historyRoutes);


app.get("/", (req,res)=>{
    res.send("MedVision AI Backend Running");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(
        `Server running on port ${PORT}`
    );
});