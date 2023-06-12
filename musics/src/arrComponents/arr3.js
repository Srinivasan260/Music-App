import React from "react"
import music from './ty copy.png'
import pathu from './pathu.jpg'
import nee from './nee.jpg'
import naam from './naam.jpg'
import rawadi from './rawadi.jpg'


const  Arr3 = () => {

  return (
    <>
      <div id="tr">

        <img src={pathu} id="img101" width="200px" height="280px"></img><br></br><br></br>

        <h5>Pathu Thala Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={naam} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Pathu Thala - Namma Satham </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={nee} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Pathu Thala - Nee Singam Dhan </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={rawadi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Pathu Thala - Raawadi </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
    
      </div>
    </>
  )
}

export default Arr3