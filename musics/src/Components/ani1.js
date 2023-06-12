import React from 'react'
import { ReactDOM } from 'react'
import './ani1.css';
import music from './ty.png';
import vikram from './v2.jpg';
import porkanda from './porkanda.jpg'
import pathala from './pathala.jpg'
import once from './once.jpg'
import wasted from './wasted.jpg'
import title from './title.jpg';
const Anirudhu1 = () => {
  return (
    <>
      <div id="tr">

        <img src={vikram} id="img100" width="400px" height="230px"></img><br></br><br></br>

        <h5>Vikram Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={once} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Once Upon A Time | VIKRAM | Anirudh </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={pathala} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Pathala Pathala| VIKRAM | Anirudh </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={porkanda} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VIKRAM - Porkanda Singam| Anirudh </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={wasted} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vikram - Wasted | Anirudh </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>
          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={title} className="img12" width="90px" height="80px"></img>
          </div>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;
          <div class="column">
            <h6>Vikram - Title Track| Anirudh </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>
          </div></div>
        <br></br>

















      </div>
    </>
  )
}

export default Anirudhu1