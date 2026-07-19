import { useNavigate } from "react-router-dom";
import "./index.css";


function Navbar(){

    const navigate = useNavigate();


    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };


    return (

        <nav className="navbar">


            <h2 
                onClick={() => navigate("/dashboard")}
            >
                MedVision AI 🩺
            </h2>



            <div className="nav-links">


                <button
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>


                <button
                    onClick={() => navigate("/upload")}
                >
                    Upload
                </button>


                <button
                    onClick={() => navigate("/history")}
                >
                    History
                </button>


                <button
                    onClick={() => navigate("/profile")}
                >
                    Profile
                </button>
                <button
 onClick={()=>navigate("/about")}
>
 About
</button>

                <button
                    onClick={logout}
                >
                    Logout
                </button>


            </div>


        </nav>

    );

}


export default Navbar;