import React from "react"
import music from './ty copy.png'
import nanban from './nanban.jpg'
import asku from './asku.jpg'
import hearty from './heartily.jpg'
import irkana from './irkana.jpg'




const  Har2 = () => {

  return (
    <>
      <div id="tr">

        <img src={nanban} id="img101" width="380px" height="230px"></img><br></br><br></br>

        <h5>Nanban songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={asku} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Asku Laska" Nanban Movie Songs</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={hearty} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Heartily Battery - Nanban Movie Songs</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={irkana} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Nanban - Irukkana  Idupu Irukkana</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={nanban} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Nanban- En friend pola </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Har2