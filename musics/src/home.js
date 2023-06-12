import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ReactDOM } from "react";
import './home.css';
import ani from './images/ann.jpg';
import master from './images/master.webp';
import vikram from './images/vikram.jpg';
import petta from './images/3.jpg';
import beast from './images/kathi.jpg';
import u1 from './images/u2.jpg';
import mankatha from './images/manaktha.jpg';
import lovetoday from './images/love today.jpg';
import aarabam from './images/aarambam.jpg';
import manadu from './images/mandu.jpg';
import arr1 from './images/ar2.jpg';
import ps1 from './images/Ps1.jpg';
import pathuthala from './images/pathuyhala.jpg';
import vtk from './images/vtk.jpg';
import bigil from './images/bigil.jpg';
import harris from './images/harris.jpg';
import varanam from './images/v2.jpg';
import yennai from './images/yennai.jpg';
import thuppaki from './images/th2.jpg';
import nanban from './images/nan.jpg';
import sana from './images/se.jpg';
import kabali from './images/k3.jpg';
import iravi from './images/iravi.jpg';
import mahaan from './images/mahaan.webp';
import vada from './images/vadachennai.webp';






const Home = () => {

  const auth = localStorage.getItem('user')

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (



    <>


      <div id="gt">

        <div id="btn">


          {auth ? <>   <br></br>
            <br></br><Button variant="light" onClick={logout} id="logout"><Link to="/">Logout </Link></Button>&nbsp;&nbsp; <i class="bi bi-person-circle" id="acc"></i> </> : <><Button variant="light" id="login" ><Link to="/login">Login</Link></Button><Button variant="light" id="sign"> <Link to="/signup" >Sign up</Link></Button> </>}
        </div>
        {auth ? <h4 id="h4">Welcome {JSON.parse(auth).name} </h4> : <h3></h3>}







        <h2> Anirudth Hits</h2><br></br>
        <div class="row">
          <div class="column">
            <Link to="/ani"> <img src={ani} height="200px" width="180px" ></img> </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/ani1"><img src={vikram} height="200px" width="180px"></img> </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/ani2"> <img src={beast} height="200px" width="180px"></img></Link>  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/ani3"> <img src={petta} height="200px" width="180px"></img> </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/ani4"> <img src={master} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>
        <br></br>

        <h2> U1 Drugs</h2><br></br>
        <div class="row">
          <div class="column">
            <Link to="/u1"> <img src={u1} height="200px" width="180px"></img> </Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/u2"><img src={mankatha} height="200px" width="180px"></img> </Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/u3"><img src={aarabam} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/u4"> <img src={manadu} height="200px" width="180px"></img> </Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/u5"> <img src={lovetoday} height="200px" width="180px"></img></Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>

        <br></br>

        <h2> ARR Magics</h2><br></br>
        <div class="row">
          <div class="column">
            <Link to="/arr1"> <img src={arr1} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/arr2"><img src={ps1} height="200px" width="180px"></img> </Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/arr3"><img src={pathuthala} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/arr4"><img src={vtk} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/arr5"><img src={bigil} height="200px" width="180px"></img></Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>

        <br></br>

        <h2> Harris Hits</h2><br></br>
        <div class="row">
          <div class="column">
            <Link to="/har1"><img src={harris} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/har2"> <img src={yennai} height="200px" width="180px"></img> </Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/har3"> <img src={nanban} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/har4"> <img src={thuppaki} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
            <Link to="/har5"><img src={varanam} height="200px" width="180px"></img></Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>

        <br></br>

        <h2> SaNa Hits</h2><br></br>
        <div class="row">
          <div class="column">
          <Link to="/san1"> <img src={sana} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
          <Link to="/san2"> <img src={kabali} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
          <Link to="/san3">  <img src={mahaan} height="200px" width="180px"></img> </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
          <Link to="/san4"> <img src={iravi} height="200px" width="180px"></img> </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
          <div class="column">
          <Link to="/san5"><img src={vada} height="200px" width="180px"></img></Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        </div>
        <br></br><br></br>



       <h5 class="h5-home"> Copyright ©2023. All rights reserved by SRTY APP </h5>

       <br></br>






      </div>

    </>


  )

}

export default Home;