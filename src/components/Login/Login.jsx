import React from "react";
import "../Login/Login.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const navigate=useNavigate();

    return(
        <div className="main-div">
            <div className='login_div'>
                <div>
                    <h1 className="h1">Login</h1>  
                </div>
                <div>          
                    <input className="input-style" placeholder="Enter Username" type="text" required/>  
                </div> 
                <div> 
                    <input className="input-style" placeholder="Enter Password" type="password" required/>
                </div> 
                <div className="btn">  
                    <Button style={{fontSize:"1rem" ,width:"4rem"}}><span>Login</span></Button>
                    <Button className="user-btn" onClick={()=>navigate('/register')} style={{fontSize:"1rem" ,width:"6rem",background:"white",color:"rgb(185,43,39)",border: "solid rgb(185,43,39) 1px"}}><span>New User</span></Button>            
                </div>
            </div>
        </div>
    )

}
export default Login