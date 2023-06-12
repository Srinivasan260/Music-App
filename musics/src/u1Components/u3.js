import React from "react"
import music from './ty copy.png'
import style from './style.jpg'
import yenfuse from './yen fuse um.jpg'
import mellala from './mellala.jpg'
import adda from './adda.jpg'
import aarambam from './aarambam.jpg'

const Yuvan2 = () => {

  return (
    <>
      <div id="tr">

        <img src={aarambam} id="img101" width="200px" height="280px"></img><br></br><br></br>

        <h5>Aarambam Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={mellala} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Aarambam - Mellala Vedikidhu</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={adda} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Aarambam |Adada Aarambam</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={yenfuse} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Aarambam - Yen Fuse um Poche</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={style} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Aarambam -  Stylish Thamizhachi</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        
      </div>
    </>
  )
}

export default Yuvan2