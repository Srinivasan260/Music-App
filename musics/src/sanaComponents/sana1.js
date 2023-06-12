import React from "react"

import music from './ty copy.png';
import goinda from './goind.jpg';
import sana from './sana.webp';
import Kannamma from './kannama.jpg'
import maya from './maya.jpg'
import mayavi from './mayavi.jpg';
import neruppu from './neruppu.jpg'
import kadhal from './kadhal.jpg';

import evan from './evan.jpeg'





const Har1 = () => {

  return (
    <>
      <div id="tr">

        <img src={sana} id="img101" width="430px" height="250px"></img><br></br><br></br>

        <h5>Sana Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
       


        <div class="row" >
          <div class="column">
            <img src={kadhal} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Iraivi - Kadhal Kappal  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={Kannamma} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kannamma  | Kaala</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





        <div class="row" >
          <div class="column">
          <img src={neruppu} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Neruppu Da </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
          <img src={maya} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kabali Songs | Maya nadhi</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
          <img src={mayavi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Ennadi Maayavi Nee   </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
          <img src={goinda} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Goindhammavaala </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={evan} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6> Mahaan - Evan da Enakku Custody </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
      </div>
    </>
  )
}

export default Har1;