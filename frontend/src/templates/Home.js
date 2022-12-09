import React, {useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
const Home = () =>
{
    const [data,setData] = useState({
        comment:'',
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
      "/api/v1/comment",
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
          <h2>Please Let everyone Know your Problem.</h2><h2>Please Complaint Here ...</h2>
          <form method="post" onSubmit={onSubmitHandler} action='/explore' id="form">
        <div className="container __body"></div>
                <h1>Comment:</h1><textarea cols="25" rows="5" id="comment" name="comment" onChange={onChangeHandler}></textarea><br />
                <button value="submit" id="submit">Submit</button>
        </form>
          
  </div>
  <div className="container __footer">
      <center><h3>Come Unite And Resolve</h3></center>
      <center><h4>CUPS</h4></center>
  </div>
</div>
      </div>
  )
};
export default Home;

/* 
<form method="post" onSubmit={onSubmitHandler} action='/explore' id="form">
        <div className="container __body"></div>
                Comment:<textarea cols="25" rows="5" id="comment" name="comment" onChange={onChangeHandler}></textarea><br />
                <input type="submit" value="submit" ></input>
        </form> */