import {useEffect,useState} from "react";
import api from "../services/api";
import "./History.css";


function History(){

const [history,setHistory]=useState([]);


useEffect(()=>{

const user=JSON.parse(
localStorage.getItem("user")
);


const getHistory=async()=>{

try{


const response = await api.get(
    `/api/history/${user.id}`
);


setHistory(response.data);


}
catch(error){

console.log(error);

}

};


getHistory();


},[]);



return(

<div className="history-page">


<h1>
Prediction History
</h1>


{

history.length===0 ?

<h3>
No predictions yet
</h3>


:

history.map((item)=>(

<div className="history-card" key={item._id}>


<h2>
{item.disease}
</h2>


<p>
Confidence:
{item.confidence}%
</p>


<p>
Date:
{new Date(item.createdAt)
.toLocaleDateString()}
</p>


</div>


))


}


</div>

);


}


export default History;