import React from "react"
import music from './ty copy.png'
import mankatha from './m2.jpg'
import machi from './m21.jpg'
import nanbane from './nanbane.jpg'
import vilayadu from './vilayadu2.jpg'
import balle from './balle.jpg'
import vaada from './vaada.jpg'


const Yuvan1 = () => {

  return (
    <>
      <div id="tr">

        <img src={mankatha} id="img101" width="380px" height="230px"></img><br></br><br></br>

        <h5>Mankatha Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={machi} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mankatha - Machi Open the Bottle</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={vilayadu} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>mankatha - Vilayadu Mankatha</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={balle} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mankatha- Balle Lakka</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={nanbane} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mankatha - Nanbane Video </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
            <img src={vaada} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mankatha - Vaada Bin laada</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





      </div>
    </>
  )
}

export default Yuvan1