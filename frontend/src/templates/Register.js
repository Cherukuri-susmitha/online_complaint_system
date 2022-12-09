import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
const Register = () =>{
    const [data,setData] = useState({
        name:'',
        roll_number : '',
        email : '',
        phone_no :'',
        gender : '',
        password : ''        
    });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
   const onChangeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
    //console.log(data);
   }
    const onSubmitHandler = e =>{
      e.preventDefault();
     axios.post(
      "/api/v1/register",
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
                <h2>To Explore New Trending Issues.</h2><h2>Please Register Here ...</h2>
                <form action="/login" method="post" id="form" onSubmit={onSubmitHandler}>
                        name : <input type="text" id="name" name="name"  onChange={onChangeHandler}/><br /><br />
                        roll_number : <input type="text" id="roll_number" name="roll_number" onChange={onChangeHandler}/><br /><br />
                        email : <input type="text" id="email" name="email" onChange={onChangeHandler}/><br /><br />
                        phone_no : <input type="text" id="phone_no" name="phone_no" onChange={onChangeHandler}/><br /><br />
                        gender : <input type="text" id="gender" name="gender" onChange={onChangeHandler}/><br /><br />
                        password : <input type="password" id="password" name="password" onChange={onChangeHandler}/><br /><br />
                        <button value="Submit" id="submit">Submit</button>
                </form>
        </div>
        <div className="container __footer">
            <center><h3>Come Unite And Resolve</h3></center>
            <center><h4>CUPS</h4></center>
        </div>
    </div>
            </div>
        )
    }
export default Register;