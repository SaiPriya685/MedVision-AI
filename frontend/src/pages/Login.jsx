import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "./Login.css";


function Login() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });


    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };


    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            const response = await api.post(
                "/auth/login",
                formData
            );


            localStorage.setItem(
                "token",
                response.data.token
            );


            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );


            alert("Login Successful");


            navigate("/dashboard");


        }
        catch(error){

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    };


    return (

        <div className="login-container">

            <form 
                className="login-card"
                onSubmit={handleSubmit}
            >

                <h1>
                    MedVision AI
                </h1>


                <h2>
                    Login
                </h2>



                <div className="input-group">

                    <FaEnvelope/>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>



                <div className="input-group">

                    <FaLock/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                </div>



                <button>
                    Login
                </button>


                <p>
                    Don't have an account?
                    <Link to="/signup">
                        Signup
                    </Link>
                </p>


            </form>


        </div>

    );
}


export default Login;