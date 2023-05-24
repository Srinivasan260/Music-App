import React from 'react'
import { Link } from 'react-router-dom'
import './personalinfo.css'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

import personinfo from './pers.png'

const Personalinfo = () => {
  const auth = localStorage.getItem('user')
  return (
    <div id="tr">

      <br></br><br></br>

      <div id="per-info-title">
        {/* <Container id="per1"> */}
        <h5 id="h5-pers-info">    Personal info </h5>
        <h6 id="h6-per-info">Info about you and your preferences across SRTY Services</h6><br></br>


        <h6 id="h6-per-infos">   Your profile info in SRTY services </h6>
        <h6 id="h6-per-infoma">Personal info and options to manage it. You can also see a summary of your profiles.</h6> </div>
      <img src={personinfo} id="img20" width="500px" height="450px" />
      <div id="personalinfo"><br></br>
        <Container id="cont-per"><br></br>
          <h3 id="personal-info-details-title">Basic info :</h3><br></br>

          <h3 id="personal-info-details">Name : <b id="per-json">{JSON.parse(auth).name}</b></h3>
          <br></br>
          <h3 id="personal-info-details">Email id : <b id="per-json">{JSON.parse(auth).email}</b></h3><br></br>

          <h3 id="personal-info-details">Age : <b id="per-json">{JSON.parse(auth).Age}</b> </h3><br></br>
          <h3 id="personal-info-details">Phone Number : <b id="per-json">{JSON.parse(auth).Phn}</b></h3><br></br>
          {/* </Container> */}
        </Container>

        <Link to="/App"> <Button type="onclick" id="btn-back" >Back</Button></Link>
        <Link to="/update-info"> <Button type="onclick" id="btn-update" >Update</Button></Link>





      </div></div>
  )
}

export default Personalinfo