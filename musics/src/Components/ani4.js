import React from 'react'
import master from './mast.jpg';
import music from './ty.png';
import vaathi from './vaathi.webp';
import raid from './raid.jpg';
import polakattum from './polakattum.jpg';
import kutti from './kutti.webp';
import andha from './andha.webp'


const Anirudhu4 = () => {
  return (
    <>
      <div id="tr">

        <img src={master} id="img101" width="400px" height="230px"></img><br></br><br></br>

        <h5>Master Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={kutti} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Master - Kutti Story Video </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={andha} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Master - Andha Kanna Paathaakaa </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={raid} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Master - Vaathi Raid Video </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
            <img src={vaathi} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Master - Vaathi Coming Video  </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
            <img src={polakattum} className="img12" width="150px" height="80px"></img>
          </div>
          <div class="column">
            <h6 id="tt">Master - Polakatum Para Para Video  </h6><br></br>
            <audio className="au1" controls ><source src={""} type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





      </div>






    </>
  )
}

export default Anirudhu4