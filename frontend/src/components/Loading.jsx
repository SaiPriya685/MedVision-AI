import { useEffect, useState } from "react";
import "./Loading.css";

function Loading() {

    const messages = [
        "Uploading Chest X-Ray...",
        "Enhancing Image...",
        "Detecting Lung Features...",
        "Running Deep Learning Model...",
        "Analyzing Pneumonia Patterns...",
        "Calculating Confidence Score...",
        "Generating Medical Report..."
    ];

    const [step, setStep] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setStep((prev) => {

                if (prev === messages.length - 1) {
                    return prev;
                }

                return prev + 1;

            });

        }, 900);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="loading-container">

            <div className="loading-card">

                <div className="loading-icon">
                    🩺
                </div>

                <h2>
                    AI Analysis in Progress
                </h2>

                <div className="loader"></div>

                <p className="loading-message">
                    {messages[step]}
                </p>

                <small>
                    Please wait while MedVision AI analyzes your X-Ray.
                </small>

            </div>

        </div>

    );

}

export default Loading;