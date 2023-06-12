import React from "react"
import music from './ty copy.png'
import unna from './unna.jpg'
import marakkum from './marakkum.jpg'
import mallipo from './mallipo.jpg'
import kaala from './kaala.jpg'
import vtk from './vtk.jpg'


const  Arr4 = () => {


  return (
    <>
      <div id="tr">

        <img src={vtk} id="img101" width="200px" height="250px"></img><br></br><br></br>

        <h5>VTK Songs :</h5><br></br>
        <img src={music} className="img11" width="45px" height="45px" ></img>&nbsp; <b>SRTY</b><br></br>

      </div><br></br><br></br>

      <div id="tw">
        <div class="row" >
          <div class="column">
          <img src={marakkum} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Marakkuma Nenjam | VTK </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={kaala} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>kaalathukkum Nee Venum  | VTK </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={unna} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Unna Nenachadhum  | VTK </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        <div class="row" >
          <div class="column">
          <img src={mallipo} className="img12" width="140px" height="80px"></img>
          </div>
          <div class="column">
            <h6>Mallipoo Video Song | VTK </h6><br></br>
            <audio className="au1" controls ><source src="" type="audio/mp3" /></audio>

          </div></div>
        <br></br><br></br>
        
      </div>
    </>
  )
}

export default Arr4