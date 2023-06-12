import React from "react"
import music from './ty copy.png'
import vada from '../images/vadachennai.webp';


import paati from './pati.jpg'
import goind from './goind.jpg'
import mayavi from './mayavi.jpg'




const  Sana5 = () => {

  return (
    <>
      <div id="tr">

        <img src={vada} id="img101" width="180px" height="230px"></img><br></br><br></br>

        <h5>kabali songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={mayavi} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Ennadi Maayavi Nee </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={goind} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Goindhammavaala</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={paati} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Kaarkuzhal Kadavaiye</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={paati} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>VADACHENNAI - Paata Paati</h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Sana5