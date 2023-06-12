import React, { useState } from 'react'
import './account.css'
import Button from 'react-bootstrap/Button';
import account from './mobile.png'

const Account = () => {
  const auth = localStorage.getItem('user')

   const [Content, setContent] = useState('clear');
   const [Ads, setAds] = useState('On');


  const setCon =()=>{
    setAds('Off')
  }
  
   const  setButt = () => {
     setContent('cleared')

   }

  return (
    <>
      <div id="tr">

        <div id="wt">
          <br></br>
          <h4 id="h4-acc">Accounts Details &nbsp;<i class="bi bi-person-circle" ></i></h4><br></br>
          <h4 id="h4-account">To Manage your accounts..Our team will use your account details for verification and identification</h4>
          <img src={account} id="img22" width="500px" height="450px" />


          <h3 id="h3-account"> <i id="acc-account" class="bi bi-person-circle" ></i></h3><h3 id="h3-acc"><b>{JSON.parse(auth).name}</b></h3><br></br>

          <div id="acc-mg">
            <br></br>
            <h6 id="h6-account">Account &nbsp;&nbsp; :&nbsp;&nbsp;<b id="h7-acc">{JSON.parse(auth).name}</b> </h6> <br></br>


            <h6 id="h6-account">  Premium Account &nbsp;&nbsp; <i id="acc-prem" class="bi bi-star-fill"></i></h6><br></br>
            <h6 id="h6-account">  Language <i id="acc-language" class="bi bi-globe2"></i></h6><br></br>


            <h6 id="h6-account"> Clear Search history </h6> <Button variant="primary" id="acc-btn" onClick={()=>{setButt()}}>{Content}</Button><br></br>

            <h6 id="h6-account">  Keep Ads   </h6><Button variant="primary" id="acc-btn" onClick={()=>{setCon()}}>{Ads}</Button><br></br>

          </div>









        </div>


















      </div>
    </>

  )
}

export default Account