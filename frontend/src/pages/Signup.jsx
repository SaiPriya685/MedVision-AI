import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await api.post("/api/auth/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            alert("Registration Successful");
            navigate("/login");
        } catch (error) {
            console.log(error);
    alert(
        JSON.stringify({
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        })
    );
}
    };

    return (
        <div className="signup-container">

            <form className="signup-card" onSubmit={handleSubmit}>

                <h1>MedVision AI</h1>

                <h2>Create Account</h2>

                <div className="input-group">
                    <FaUser />
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaLock />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <FaLock />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button>Create Account</button>

                <p>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </form>

        </div>
    );
}

export default Signup;