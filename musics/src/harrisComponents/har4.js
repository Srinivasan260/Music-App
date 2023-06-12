import React from "react"
import music from './ty copy.png'
import thupaki from './thupaki.jpg'
import alaika from './alaika.jpg'
import google from './google.jpg'
import kutti from './kutti.jpg'
import ven from './ven.jpg'



const  Har2 = () => {

  return (
    <>
      <div id="tr">

        <img src={thupaki} id="img101" width="200px" height="230px"></img><br></br><br></br>

        <h5>Thuppakki songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={kutti} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Kutti Puli Kootam  | Thuppakki </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={alaika} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Alaika Laika  | Thuppakki  </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={google} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Google Google  | Thuppakki </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={ven} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Vennilave  | Thuppakki </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
       





      </div>
    </>
  )
}

export default Har2