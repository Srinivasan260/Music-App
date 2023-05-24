import React from "react";
import music from './ty copy.png'
import voice from './voice.jpg'
import mersaila from './meralsaila.jpg'
import maanadu from './maanadu.jpg'

const Yuvan3 = () => {

  return (
    <>
      <div id="tr">

        <img src={maanadu} id="img101" width="300px" height="200px"></img><br></br><br></br>

        <h5>Maanadu Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={mersaila} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Two Two Two |KKK</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={voice} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Two Two Two |KKK</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        
      </div>
    </>
  )
}

export default Yuvan3