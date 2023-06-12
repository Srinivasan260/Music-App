import React from "react"

import music from './ty copy.png';
import yethiran from './2.0.jpg';
import arr from './arrrahman.jpg';
import jeans from './jeans.jpg'
import munbe from './munbe va.jpg'
import ccv from './ccv.jpg';
import kannala from './kannal.jpg'
import ravan from './usuru.jpg'
import arima from './arima.jpg'





const Arr1 = () => {

  return (
    <>
      <div id="tr">

        <img src={arr} id="img101" width="430px" height="240px"></img><br></br><br></br>

        <h5>ARR Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
            <img src={kannala} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6> Kannalanae Song | Bombay</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={jeans} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Anbae Anbae | Jeans </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
            <img src={ravan} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Raavanan - Usure Pogudhey </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>





        <div class="row" >
          <div class="column">
          <img src={ccv} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Chekka Chivantha Vaanam - Mazhai Kuruvi </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>


        <div class="row" >
          <div class="column">
          <img src={munbe} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Sillunu Oru Kadhal | Munbe Vaa Song</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>



        <div class="row" >
          <div class="column">
          <img src={arima} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Arima Arima | Enthiran  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>

        <div class="row" >
          <div class="column">
          <img src={yethiran} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Endhira Logathu Sundariye | 2.0 </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
      </div>
    </>
  )
}

export default Arr1;