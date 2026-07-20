import Loading from "../components/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Upload.css";


function Upload(){

    const navigate = useNavigate();


    const [image,setImage] = useState(null);

    const [preview,setPreview] = useState(null);

    const [loading,setLoading] = useState(false);



    const handleImageChange=(e)=>{

        const file=e.target.files[0];

        if(file){

            setImage(file);

            setPreview(
                URL.createObjectURL(file)
            );

        }

    };



    const handleUpload=async()=>{


        if(!image){

            alert("Please select an X-Ray image");

            return;

        }


        try{

            setLoading(true);


            const formData=new FormData();


            const user = JSON.parse(
    localStorage.getItem("user")
);


formData.append(
    "image",
    image
);


formData.append(
    "userId",
    user.id
);


            const response = await api.post(
    "/api/predict",
    formData,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
);



            localStorage.setItem(
                "prediction",
                JSON.stringify(response.data)
            );


            navigate("/result");


        }
        catch(error){

            console.log(error);

            alert(
                "Prediction failed"
            );

        }
        finally{

            setLoading(false);

        }


    };


return(
    <>
        {loading && <Loading />}

        <div className="upload-page">

            <div className="upload-card">

                <h1>
                    Upload Chest X-Ray
                </h1>

                <p>
                    Upload your medical image for AI analysis
                </p>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {
                    preview &&
                    <img
                        src={preview}
                        className="preview-image"
                    />
                }

                <button
                    onClick={handleUpload}
                    disabled={loading}
                >
                    {
                        loading
                        ? "Analyzing..."
                        : "Analyze Image"
                    }
                </button>

            </div>

        </div>
    </>
);
    

}


export default Upload;