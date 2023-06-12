import React from "react"
import music from './ty copy.png'
import iravi from './iravi.jpeg';

import ondru from './ondeu.jpg'
import dhustu from './dhustu.jpg'
import kadhal from './kadhal.jpg'




const  Sana4 = () => {

  return (
    <>
      <div id="tr">

        <img src={iravi} id="img101" width="330px" height="230px"></img><br></br><br></br>

        <h5>kabali songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={kadhal} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Iraivi - Kadhal Kappal </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={iravi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Iravi | Manidhi</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={ondru} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Iravi| onnu rendu</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={dhustu} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Iravi | Dhushta</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Sana4

