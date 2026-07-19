import Navbar from "../components/Navbar";
import "./About.css";


function About(){

    return(

        <div className="about-page">


            <Navbar />


            <div className="about-container">


                <h1>
                    About MedVision AI 🩺
                </h1>


                <p className="intro">

                    MedVision AI is an AI-powered medical
                    imaging assistant designed to analyze
                    chest X-ray images and provide fast,
                    intelligent predictions.

                </p>



                <div className="about-card">


                    <h2>
                        How It Works
                    </h2>


                    <div className="workflow">


                        <div>
                            📷
                            <h3>
                                Upload X-Ray
                            </h3>
                            <p>
                                User uploads a chest X-ray image.
                            </p>
                        </div>



                        <div>
                            🤖
                            <h3>
                                AI Analysis
                            </h3>
                            <p>
                                Deep learning model analyzes image patterns.
                            </p>
                        </div>



                        <div>
                            📊
                            <h3>
                                Prediction
                            </h3>
                            <p>
                                AI generates disease prediction and confidence.
                            </p>
                        </div>


                    </div>


                </div>




                <div className="about-card">


                    <h2>
                        Technology Stack
                    </h2>


                    <ul>

                        <li>
                            React.js - Frontend Interface
                        </li>

                        <li>
                            Node.js + Express - Backend API
                        </li>

                        <li>
                            MongoDB - Database
                        </li>

                        <li>
                            FastAPI - AI Model Server
                        </li>

                        <li>
                            TensorFlow / CNN - Deep Learning Model
                        </li>

                    </ul>


                </div>





                <div className="warning">


                    ⚠️ Medical Disclaimer

                    <p>

                    MedVision AI provides AI-assisted
                    predictions only. It is not a replacement
                    for professional medical diagnosis.
                    Always consult a qualified healthcare
                    professional.

                    </p>


                </div>


            </div>


        </div>

    );

}


export default About;