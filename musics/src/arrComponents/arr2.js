import React from "react"
import music from './ty copy.png'
import ponni from './ponni.jpg'
import ratsa from './ratsa.jpg'
import theva from './thevarattam.jpg'
import nandhi from './nadhi.jpg'
import ps1 from './ps1.jpg'



const  Arr2 = () => {

  return (
    <>
      <div id="tr">

        <img src={ps1} id="img101" width="380px" height="230px"></img><br></br><br></br>

        <h5>PS-1 :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={nandhi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Ponni Nadhi | Ponniyin Selvan 1 </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={ponni} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Chola Chola  | Ponniyin Selvan - 1 </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={ratsa} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Ratchasa Maamaney  | Ponniyin Selvan -1 </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={theva} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Devaralan Aattam  | Ponniyin Selvan -1 </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Arr2