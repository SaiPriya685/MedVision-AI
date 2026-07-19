import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FaLungs,
    FaRobot,
    FaFileMedical,
    FaHistory,
    FaArrowRight
} from "react-icons/fa";

import Navbar from "../components/common/Navbar";


function Landing(){

    return (

        <>

        <Navbar />


        <div className="min-h-screen bg-slate-50">


            {/* HERO SECTION */}

            <section className="max-w-7xl mx-auto px-8 py-24">


                <div className="grid lg:grid-cols-2 gap-12 items-center">


                    <motion.div

                    initial={{
                        opacity:0,
                        x:-50
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    >


                    <h1 className="text-6xl font-bold leading-tight">

                        AI Powered

                        <span className="text-blue-600">

                            {" "}Chest X-Ray

                        </span>

                        <br/>

                        Pneumonia Detection


                    </h1>



                    <p className="mt-8 text-xl text-gray-600">

                        MedVision AI uses deep learning to analyze
                        chest X-ray images and provide fast,
                        accurate pneumonia predictions with
                        confidence scores and medical reports.

                    </p>



                    <div className="mt-10 flex gap-5">


                    <Link to="/signup">

                    <button className="
                    bg-blue-600 
                    text-white 
                    px-8 
                    py-4 
                    rounded-xl
                    hover:bg-blue-700
                    flex
                    items-center
                    gap-3
                    ">

                    Get Started

                    <FaArrowRight/>

                    </button>

                    </Link>



                    <Link to="/about">

                    <button className="
                    border
                    border-blue-600
                    text-blue-600
                    px-8
                    py-4
                    rounded-xl
                    ">

                    Learn More

                    </button>

                    </Link>



                    </div>


                    </motion.div>




                    <motion.div

                    initial={{
                        opacity:0,
                        x:50
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    >


                    <img

                    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900"

                    alt="medical ai"

                    className="
                    rounded-3xl
                    shadow-2xl
                    "

                    />


                    </motion.div>


                </div>


            </section>





            {/* FEATURES */}


            <section className="py-24 bg-white">


            <div className="max-w-7xl mx-auto px-8">


            <h2 className="
            text-4xl
            font-bold
            text-center
            ">

            Powerful AI Features

            </h2>



            <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-16
            ">



            <Feature

            icon={<FaLungs/>}

            title="Chest X-Ray Upload"

            text="Upload chest X-ray images securely for AI analysis."

            />



            <Feature

            icon={<FaRobot/>}

            title="AI Prediction"

            text="Deep learning model detects pneumonia patterns."

            />



            <Feature

            icon={<FaFileMedical/>}

            title="Medical Report"

            text="Generate downloadable AI analysis reports."

            />



            <Feature

            icon={<FaHistory/>}

            title="Scan History"

            text="Track previous predictions from your dashboard."

            />


            </div>


            </div>


            </section>






            {/* HOW IT WORKS */}



            <section className="
            py-24
            bg-slate-50
            ">


            <div className="
            max-w-7xl
            mx-auto
            px-8
            ">


            <h2 className="
            text-4xl
            font-bold
            text-center
            ">

            How MedVision AI Works

            </h2>




            <div className="
            grid
            md:grid-cols-4
            gap-8
            mt-16
            ">


            {
                [

                ["📷","Upload X-Ray"],

                ["🤖","AI Analysis"],

                ["📊","Prediction Result"],

                ["📄","Download Report"]

                ]

                .map((item,index)=>(


                <div

                key={index}

                className="
                bg-white
                p-8
                rounded-2xl
                shadow
                text-center
                "

                >


                <div className="text-5xl">

                {item[0]}

                </div>


                <h3 className="
                text-xl
                font-semibold
                mt-5
                ">

                {item[1]}

                </h3>


                </div>


                ))

            }


            </div>


            </div>


            </section>







            {/* STATISTICS */}



            <section className="
            bg-blue-600
            py-20
            ">


            <div className="
            max-w-7xl
            mx-auto
            px-8
            ">


            <div className="
            grid
            md:grid-cols-4
            gap-10
            text-center
            text-white
            ">


            <Stat number="95%" text="Model Accuracy"/>

            <Stat number="5000+" text="X-Ray Images"/>

            <Stat number="24/7" text="AI Availability"/>

            <Stat number="Fast" text="Prediction"/>


            </div>


            </div>


            </section>







            <footer className="
            bg-slate-900
            text-white
            py-12
            text-center
            ">


            <h2 className="
            text-3xl
            font-bold
            ">

            MedVision AI

            </h2>


            <p className="
            mt-4
            text-gray-400
            ">

            AI Powered Chest X-Ray Pneumonia Detection Platform

            </p>


            </footer>




        </div>


        </>

    );

}



function Feature({icon,title,text}){


return (

<div className="
bg-slate-100
p-8
rounded-2xl
">


<div className="
text-5xl
text-blue-600
">

{icon}

</div>


<h3 className="
text-2xl
font-semibold
mt-5
">

{title}

</h3>


<p className="
mt-3
text-gray-600
">

{text}

</p>


</div>

)

}




function Stat({number,text}){


return (

<div>

<h2 className="
text-5xl
font-bold
">

{number}

</h2>

<p className="
mt-3
">

{text}

</p>

</div>

)

}



export default Landing;