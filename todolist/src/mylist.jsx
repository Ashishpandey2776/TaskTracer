import axios from 'axios'
import { useState } from 'react'
import './mylist.css'
 function Mylist(){
    const [task,settask]=useState();
    const handleClick=()=>{
        axios.post("http://localhost:9090/add",{task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    } 
    return(
        <div id='inputfield'>
           <input type="text" placeholder="Enter your work" onChange={(event)=>settask(event.target.value)}/>
           <button className="button" type="button" onClick={handleClick}>Add</button>
        </div>
    )
 }
 export default Mylist