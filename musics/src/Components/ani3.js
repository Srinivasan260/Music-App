import React from 'react'
import './ani1.css'

import pone from './pone.jpg'
import ythis from './ythis.jpg'
import music from './ty.png'
import thr2 from './three.webp'
import kanna from './kannaz.jpg'
import idhayam from './idhayam.jpg'
import paartha from './paartha.jpg';




const Anirudhu3 = () => {
  return (
    <>

      <div id="tr">

        <img src={thr2} id="img101" width="400px" height="230px"></img><br></br><br></br>

        <h5>3 Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={idhayam} className="img12" width="150px" height="100px"></img>
          </div>
          <div class="column">
            <h6 id="tt">3 - Idhazhin Oram Video </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={paartha} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">3 - Nee Paartha Vizhigal </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={kanna} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">3 - KannazhagaVideo </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={ythis} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">3 - Why This Kolaveri Di  </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={pone} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">3 - Po Nee Po </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



      </div>





























    </>
  )
}

export default Anirudhu3