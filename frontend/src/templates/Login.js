import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'

const Login =()=>{
    {
    const [data,setData] = useState({
        email : '',
        password : ''        
    });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
   const onChangeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
   }
    const onSubmitHandler = e =>{
      e.preventDefault();
     axios.post(
      "/api/v1/login",
       data,
       config,
     )
    }
        return(
        <div>
        <div className="container">
        <div className="container __navbar">
            <ul id="horizontal-list">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/explore">explore</Link></li>
                <li><Link to="/Myresponse">Mycomplaints</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/">New User?</Link></li>
             </ul>
        </div>
        <div className="container __body">
                <h2>Just One more Step Buddy. </h2><h2>Please Login Here ..</h2>
                <form action="/home" method="post" id="form" onSubmit={onSubmitHandler}>
                        email : <input type="text" id="name"  name="email" onChange={onChangeHandler}/><br /><br />
                        password:<input type="password" id="password" name="password" onChange={onChangeHandler}/><br /><br />
                        <button value="Submit" id="submit">Submit</button>
                </form>
        </div>
        <div className="container __footer">
            <center><h3>Come Unite And Resolve</h3></center>
            <center><h4>CUPS</h4></center>
        </div>
    </div>
            </div>
        );
    }
}
export default Login;