import React, { Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Response() {
  const [data,setData] = useState({});
  const [upvote,setupVote] = useState({
    vote:'upvote',
  });
  const [downvote,setdownVote] = useState({
    vote:'downvote',
  });

  useEffect(() => {
    commentData();
  },[setData]);
  const config= {
   headers: { "Content-Type": "application/json" },
 }
  const onupChangeHandler = async(id,e) =>{
    e.preventDefault();
    setupVote({...upvote,[e.target.name]:e.target.value});
    await (axios.put(`/api/v1/vote/`+`${id}`,
    upvote,
    config,
    ));
    setData(data);
  }
  const ondownChangeHandler = async(id,e) =>{
    e.preventDefault();
    setdownVote({...downvote,[e.target.name]:e.target.value});
    await (axios.put(`/api/v1/vote/`+`${id}`,
    downvote,
    config,
    ));
    setData(data);
  }
  const commentData = async() => {
     const value = ( await axios.get('/api/v1/comment_response',config)).data.data;
     setData(value);   
  }; 

// const updateData= async(id,e) =>{
//      await (axios.put(`/api/v1/vote/`+id,
//       config,
//   ).then((res) => console.log(res.data)));
//   setVote(vote);
// }
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
            <Fragment key={i}>
               <div className="complaintCard">
                    <b>{datax.name}</b>
                    <h5>{datax.comment}</h5>
                     Count: <b>{datax.voteCount}</b><br />
                    <input type="button" value="upvote" id="upvote" name="upvote" className='upvote'  onClick={(e) => {onupChangeHandler(datax._id,e)}}/>
                    <input type="button" value="downvote" id="downvote" name="downvote" className='downvote' onClick={(e) => {ondownChangeHandler(datax._id,e)}} />
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
export default Response;