import React, { Fragment, useState,useEffect } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const Logout = () =>{
    useEffect(() => {
    commentData();
  }, []);
  const commentData = async() => {
      return (await axios.get(`/api/v1/logout`)).data;
  };
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
       <h1>Thank You</h1>
    </div>
    <div className="container __footer">
        <center><h3>Come Unite And Resolve</h3></center>
        <center><h4>CUPS</h4></center>
    </div>
</div>
        </div>)
}
export default Logout;

// useEffect(() => {
//     commentData();
//   }, []);
//   const commentData = async() => {
//       return (await axios.get(`/api/v1/logout`));
//   };