import React from 'react'
import music from './ty copy.png'
import pacha from './pacha.jpg'
import saachitale from './saachitale.jpg'
import ennaivittu from './ennaivittu.jpg'
import lovetoday from './lovetoday.jpg'
import mamakutty from './mamakutty.jpg'

const Yuvan5 =() => {
  return (
   <>
    <div id="tr">

<img src={lovetoday} id="img101" width="300px" height="200px"></img><br></br><br></br>

<h5>Maanadu Songs :</h5><br></br>
<img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

</div><br></br><br></br>

<div id="tw">
<div class="row" >
  <div class="column">
    <img src={ennaivittu} className="img12" width="140px" height="80px"></img>
  </div>
  <div class="column">
    <h6>Love Today - Ennai Vittu </h6><br></br>
    <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

  </div></div>
<br></br><br></br>
<div class="row" >
  <div class="column">
    <img src={saachitale} className="img12" width="140px" height="80px"></img>
  </div>
  <div class="column">
    <h6>Love Today - Saachitale </h6><br></br>
    <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

  </div></div>
<br></br><br></br>
<div class="row" >
  <div class="column">
    <img src={mamakutty} className="img12" width="140px" height="80px"></img>
  </div>
  <div class="column">
    <h6>Love Today - Mamakutty</h6><br></br>
    <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

  </div></div>
<br></br><br></br>
<div class="row" >
  <div class="column">
    <img src={pacha} className="img12" width="140px" height="80px"></img>
  </div>
  <div class="column">
    <h6>Love Today - Pacha Elai</h6><br></br>
    <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

  </div></div>
<br></br><br></br>

</div>
   
   
   
   
   
   </>
  )
}

export default Yuvan5