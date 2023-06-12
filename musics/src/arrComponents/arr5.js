import React from "react"
import music from './ty copy.png'
import unna from './unakaga.jpg'
import marakkum from './singa.jpg'
import veri from './veri.jpg'
import kaala from './kaalamae.jpg'
import bigil from './bigil.jpg'


const  Arr5 = () => {


  return (
    <>
      <div id="tr">

        <img src={bigil} id="img101" width="200px" height="250px"></img><br></br><br></br>

        <h5>Bigil Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={marakkum} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Bigil - Singappenney  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={veri} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Bigil - Verithanam  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={unna} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Bigil - Unakaga </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={kaala} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Bigil - Kaalame  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        
      </div>
    </>
  )
}

export default Arr5