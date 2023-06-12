import React from "react"
import music from './ty copy.png'
import kabali from '../images/k3.jpg';

import neruppu from './neruppu.jpg'
import ulagam from './ulagam.jpg'
import maya from './maya.jpg'
import mayavi from './mayavi.jpg'




const  Har2 = () => {

  return (
    <>
      <div id="tr">

        <img src={kabali} id="img101" width="180px" height="230px"></img><br></br><br></br>

        <h5>kabali songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={ulagam} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Ulagam Oruvanukka</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={maya} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Maya Nadhi </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={mayavi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Neruppu Da Song</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={neruppu} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Neruppu</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Har2