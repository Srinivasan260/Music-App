import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import Container from "react-bootstrap/esm/Container";
import settings from './settings/settings.png'


const Car = () => {

  return (
    <div id="tr">
      <div id="setting"><br></br>
      <h3 id="title-settings">Settings&nbsp;&nbsp;<i class="bi bi-gear"  id="sett-app"></i></h3>
      
      <img src={settings} id="img21" width="500px" height="450px" />

      <div id="yt">
       
        <h3 ><b><Link to="/Account-setting" id="links-setting">Account</Link> </b> </h3><br></br>
        <h3 ><Link to="/personal-Info" id="links-setting"><b>Personal Information</b> </Link> </h3><br></br>
        <h3 ><Link to="/about-Info" id="links-setting"><b>About</b> <i  id="set-help" class="bi bi-question-square"></i> </Link> </h3><br></br>
        <h3><Link to="/help-Info" id="links-setting"><b>Help</b>   </Link></h3><br></br>
      </div>
    </div>
    </div>
  )
};

export default Car;
