import React from "react"
import u11 from './u11.jpg';
import music from './ty copy.png';
import lusu from './lusu.jpg';
import nana from './nana.jpg'
import nandha from './nandha.jpg'
import ohsala from './oh sala.jpg'
import thee from './thee.jpg'
import yedho from './yedho.jpg'
import venmegan from './venmegan.jpg'


const Yuvan = () => {

  return (
    <>
      <div id="tr">

        <img src={u11} id="img101" width="430px" height="240px"></img><br></br><br></br>

        <h5>Yuvan Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={thee} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Arinthum Ariyamalum | Theepidika</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={yedho} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Paiya - Yedho Ondru Ennai </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={nandha} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mun Paniya - Nandha</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





        <div class="row" >
          <div class="column">
            <img src={nana} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Biriyani - Nahna Na Nah Video</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={lusu} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Loosu Penne | Vallavan</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
            <img src={venmegan} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Yaaradi Nee Mohini | Vennmegam</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
            <img src={ohsala} className="img12" width="120px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Oh Shala Oh Shala| Kaadhal Solla Vandhen</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
      </div>
    </>
  )
}

export default Yuvan;