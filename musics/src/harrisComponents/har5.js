import React from "react"
import music from './ty copy.png'
import varanam from './var.jpg'
import nenju from './nenju.jpg'
import anal from './annal.jpg'
import adiyae from './adiy.jpeg'
import ava from './ava.jpg'



const  Har2 = () => {

  return (
    <>
      <div id="tr">

        <img src={varanam} id="img101" width="380px" height="230px"></img><br></br><br></br>

        <h5>Vaaranam Aayiram songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={anal} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vaaranam Aayiram - Anal Maelae </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={ava} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vaaranam Aayiram - Ava Enna</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={nenju} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vaaranam Aayiram - Nenjukkul Peidhidum </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={adiyae} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vaaranam Aayiram - Adiyae Kolluthey </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
    


      </div>
    </>
  )
}

export default Har2