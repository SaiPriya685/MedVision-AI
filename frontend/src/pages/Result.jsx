import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "./Result.css";

function Result(){

    const navigate = useNavigate();


    const prediction = JSON.parse(
        localStorage.getItem("prediction")
    );
    
const downloadReport = () => {

    const doc = new jsPDF();


    const user = JSON.parse(
        localStorage.getItem("user")
    );


    doc.setFontSize(20);

    doc.text(
        "MedVision AI Medical Report",
        20,
        30
    );


    doc.setFontSize(14);


    doc.text(
        `Patient Name: ${user?.name}`,
        20,
        50
    );


    doc.text(
        `Email: ${user?.email}`,
        20,
        65
    );


    doc.text(
        `Prediction: ${prediction.disease}`,
        20,
        90
    );


    doc.text(
        `Confidence: ${prediction.confidence}%`,
        20,
        105
    );


    const severity =
        prediction.disease === "PNEUMONIA"
        ? "High"
        : "Low";


    doc.text(
        `Severity: ${severity}`,
        20,
        120
    );


    doc.text(
        "Disclaimer:",
        20,
        160
    );


    doc.text(
        "This AI result is not a medical diagnosis.",
        20,
        180
    );


    doc.text(
        "Please consult a qualified healthcare professional.",
        20,
        195
    );


    doc.save(
        "MedVision_AI_Report.pdf"
    );

};
    if(!prediction){

        return (

            <div className="no-result">

                <h2>
                    No prediction available
                </h2>

                <button
                    onClick={()=>navigate("/upload")}
                >
                    Upload Image
                </button>

            </div>

        );

    }



    const severity =
        prediction.disease === "PNEUMONIA"
        ?
        "High"
        :
        "Low";

    

    return(

        <div className="result-page">


            <div className="result-card">

            <h1>🩺 AI Medical Analysis Report</h1>

<div className="status-section">

    <div className="result-icon">
        {prediction.disease === "PNEUMONIA" ? "🫁" : "✅"}
    </div>

    <h2>Status</h2>

    <div
        className={
            prediction.disease === "PNEUMONIA"
                ? "status danger-badge"
                : "status success-badge"
        }
    >
        {prediction.disease}
    </div>

</div>


<div className="patient-card">

    <h3>Patient Information</h3>

    <p><strong>Name:</strong> {JSON.parse(localStorage.getItem("user"))?.name}</p>

    <p><strong>Email:</strong> {JSON.parse(localStorage.getItem("user"))?.email}</p>

</div>


<div className="confidence-card">

    <h3>Confidence Score</h3>

    <h2>{prediction.confidence}%</h2>

    <div className="progress-bar">

        <div
            className="progress-fill"
            style={{
                width: `${prediction.confidence}%`
            }}
        ></div>

    </div>

</div>


<div className="severity-card">

    <h3>Severity</h3>

    <span>{severity}</span>

</div>


<div className="recommendation">

    <h3>AI Recommendation</h3>

    {
        prediction.disease === "PNEUMONIA"

        ?

        <ul>

            <li>✔ Consult a medical professional immediately.</li>

            <li>✔ Further chest examination is recommended.</li>

            <li>✔ Follow prescribed medication and rest.</li>

        </ul>

        :

        <ul>

            <li>✔ No signs of pneumonia detected.</li>

            <li>✔ Maintain a healthy lifestyle.</li>

            <li>✔ Continue regular health checkups.</li>

        </ul>

    }

</div>


<div className="disclaimer">

    <h3>⚠ Medical Disclaimer</h3>

    <p>

        This AI prediction is intended only as a decision-support
        tool and should not replace professional medical diagnosis.

    </p>

</div>


<div className="button-group">

    <button
        onClick={downloadReport}
    >
        📄 Download Report
    </button>

    <button
        onClick={() => navigate("/upload")}
    >
        🔄 Upload Another Scan
    </button>

</div>


            </div>


        </div>

    );

}


export default Result;