import React from "react"
import music from './ty copy.png'
import mahaan from './mahaan.jpg';

import  missing from './missing.jpg'
import soor from './soorya.jpg'
import naan from './naan.jpg'
import evan from './evan.jpeg'




const  Sana3 = () => {

  return (
    <>
      <div id="tr">

        <img src={mahaan} id="img101" width="330px" height="230px"></img><br></br><br></br>

        <h5>Mahaan songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={evan} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mahaan - Evanda Enakku Custody </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={naan} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mahaan - Naan Naan song </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={missing} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mahaan - Missing me?</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={soor} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mahaan - Soorayaattam</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Sana3