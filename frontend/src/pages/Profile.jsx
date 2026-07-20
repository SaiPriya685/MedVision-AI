import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "./Profile.css";


function Profile(){

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    const [stats,setStats] = useState({

        total:0,
        normal:0,
        pneumonia:0

    });



    useEffect(()=>{


        const getStats = async()=>{

            try{

                
                const response = await api.get(
    `/api/history/${user.id}`
);

                const data=response.data;



                setStats({

                    total:data.length,

                    normal:data.filter(
                        item=>item.disease==="NORMAL"
                    ).length,


                    pneumonia:data.filter(
                        item=>item.disease==="PNEUMONIA"
                    ).length

                });


            }
            catch(error){

                console.log(error);

            }

        };


        getStats();


    },[]);



    return(

        <div className="profile-page">


            <Navbar />


            <div className="profile-card">


                <div className="profile-icon">
                    👤
                </div>


                <h1>
                    User Profile
                </h1>



                <div className="profile-info">


                    <p>
                        <b>Name:</b>
                        {user?.name}
                    </p>


                    <p>
                        <b>Email:</b>
                        {user?.email}
                    </p>


                </div>




                <h2>
                    Scan Summary
                </h2>



                <div className="profile-stats">


                    <div>

                        <h3>
                            {stats.total}
                        </h3>

                        <p>
                            Total Scans
                        </p>

                    </div>



                    <div>

                        <h3>
                            {stats.normal}
                        </h3>

                        <p>
                            Normal
                        </p>

                    </div>



                    <div>

                        <h3>
                            {stats.pneumonia}
                        </h3>

                        <p>
                            Pneumonia
                        </p>

                    </div>


                </div>


            </div>


        </div>

    );

}


export default Profile;