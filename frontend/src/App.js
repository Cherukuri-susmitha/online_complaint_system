import Home from './templates/Home';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Response from './templates/Response';
import Myresponse from './templates/Myresponse';
import Register from './templates/Register';
import Login from './templates/Login';
import Logout from './templates/Logout';
import About from './templates/About';
const App= () =>{
  return (
      <Router>
         <Fragment >
          <Routes>
            <Route exact path='/' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/logout' element={<Logout />} />
            <Route exact path='/home'  element={<Home/>}/>
            <Route exact path='/about'  element={<About/>}/>
            <Route exact path='/explore' element={<Response />} />
            <Route exact path='/myresponse' element={<Myresponse />} />
         </Routes>
         </Fragment>
      </Router>       
  );
}
export default App;
