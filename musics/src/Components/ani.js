import React from "react";
import ReactDOM from "react-dom";
import ani2 from './ani3.webp'
import './ani.css';
import music from './ty.png';
import two from './two.jpg';
import two2 from './2to2.mp3';
import Ani2 from './ani2';
import three from './3.jpg';
import master from './master.jpg'
import yanji from './y3.jpg';
import petta from './petta2.jpg';
import maari from './maari.jpg';
import vip2 from './vip.webp';
import kanave from './kanave.jpg';
import vanakkam2 from './vanakkam2.jpg';


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';


const Car1 = () => {

  return (
    <>
      <div id="tr">

        <img src={ani2} id="img10" width="350px" height="230px"></img><br></br><br></br>

        <h5>Anirudhu Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={two} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Two Two Two |KKK</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={petta} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Petta - Marana Mass </h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br>

        <div class="row" >
          <div class="column">
            <img src={three} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>3 - Idhazhin Oram |3</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={vanakkam2} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vanakkam Chennai - Oh Penne Video</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
            <img src={yanji} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vikram Vedha Songs | Yaanji </h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
            <img src={maari} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Maari - Maari Thara Local</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={vip2} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Velai Illa Pattadhaari- Po Indru Neeyaga </h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={kanave} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kanave Kanave-David (2013)</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={three} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>3 - Po Nee Po Video | 3</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br>


        <div class="row" >
          <div class="column">
            <img src={master} className="img12" width="80px" height="80px"></img>
          </div>
          <div class="column">
            <h6>3 - Po Nee Po Video | Dhanush, Shruti | Anirudh</h6><br></br>
            <audio className="au1" controls ><source src={two2} type="audio/mp3" /></audio>
          </div></div>
        <br></br>




      </div>







    </>
  )
};

export default Car1;