import React from "react"

import music from './ty copy.png';
import unakku from './unakku.jpg';
import harr from './jy.webp';
import manjal from './manjal.jpg'
import malai from './mazhai.jpg'
import nenju from './nenju.jpg';
import partha from './paartha.jpg'
import mun from './mun.jpg';

import annal from './annal.jpg'





const Har1 = () => {

  return (
    <>
      <div id="tr">

        <img src={harr} id="img101" width="430px" height="250px"></img><br></br><br></br>

        <h5>ARR Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
       


        <div class="row" >
          <div class="column">
            <img src={mun} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>7 Aum Arivu - Mun Andhi  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={malai} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Mazhai Vara Pogudha</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





        <div class="row" >
          <div class="column">
          <img src={unakku} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Unakkenna Venum Sollu</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
          <img src={annal} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vaaranam Aayiram - Annul Maelae </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
          <img src={manjal} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Manjal velyil | vetaiyadu veliyadu  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
          <img src={partha} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>partha | vetaiyadu veliyadu</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={nenju} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6> Vaaranam Aayiram - Nenjukkul Peidhidum </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
      </div>
    </>
  )
}

export default Har1;