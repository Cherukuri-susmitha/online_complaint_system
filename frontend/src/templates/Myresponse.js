import React, { Fragment, useEffect, useState } from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';
function Myresponse() {
  const [data,setData] = useState({ });
  useEffect(() => {
    commentData();
  }, []);
  const config= {
   headers: { "Content-Type": "application/json" },
 }
  const commentData = async() => {
     const value = ( await axios.get(`/api/v1/comment_response/mine`,config)).data.data;
   console.log(value);
   setData(value);   
  }; 
  const deleteData = async(id) =>{
    axios
    .delete("/api/v1/delete/" + id)
    .then((response) => {
      console.log(response.data);
    });
  const del = data.filter((el) => el._id !== id);
  setData(del);
  } 
  return (
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
  <div className="container __body"></div>
    <Fragment>
      {data.length >=1 ?
      (data.map((datax,i) => {
         return(
            <Fragment key={i} >
              <div className="complaintCard">
                    <h2>{datax.name}</h2>
                    <h5>{datax.comment}</h5>
                    <h5>{datax.voteCount}</h5>
                    <button onClick={() => deleteData(datax._id)}>Delete</button>
              </div>
            </Fragment>)
        }) ):null}
  </Fragment>
  <div className="container __footer">
      <center><h3>Come Unite And Resolve</h3></center>
      <center><h4>CUPS</h4></center>
  </div>
</div>
      </div>)
}
export default Myresponse;