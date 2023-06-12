import React from "react"
import music from './ty copy.png'
import yen from './yen.jpg'
import mazhai from './mazhai.jpg'
import unakku from './unakku.jpg'
import adharu from './adharu.jpg'
import yennai from './yennai.webp'



const  Har2 = () => {

  return (
    <>
      <div id="tr">

        <img src={yennai} id="img101" width="180px" height="230px"></img><br></br><br></br>

        <h5>Yennai arindhal songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={mazhai} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Mazhai Vara Pogudhae </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={unakku} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Unakkenna Venum Sollu </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={adharu} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Adhaaru Adhaaru</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={yen} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yennai Arindhaal - Yaen Ennai </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Har2