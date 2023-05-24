import React from 'react'

import music from './ty.png';
import kathi from './k2.jpg';
import selfie from './selfie.webp'
import paalam from './paalam.jpg'
import aathi from './aathi.jpg'
import pakkam from './pakkam.jpg'


const Anirudhu2 = () => {
  return (

    <>
      <div id="tr">

        <img src={kathi} id="img10" width="400px" height="230px"></img><br></br><br></br>

        <h5>Kathi Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={aathi} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Aathi | Kaththi | </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={paalam} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Paalam |Kaththi|</h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={selfie} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Selfie Pulla | Kaththi</h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={kathi} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">yaaro yaaro | Kaththi </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={pakkam} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Pakkam Vanthu |Kaththi </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>




      </div>
    </>
  )
}

export default Anirudhu2