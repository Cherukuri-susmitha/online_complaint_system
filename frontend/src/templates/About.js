import React from "react";
import {Link} from "react-router-dom";

class About extends React.Component{
    render(){
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
    
            </div>
        <div className="container __footer">
            <center><h3>Come Unite And Resolve</h3></center>
            <center><h4>CUPS</h4></center>
        </div>
         </div>
        </div>)
    }
}

export default About;