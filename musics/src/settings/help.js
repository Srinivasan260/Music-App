import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './help.css'
import Button from 'react-bootstrap/esm/Button';
import image from './help.png'

const Help = () => {

  const[Problem,setProblem]= useState('')

  const[text,changeText] = useState('')


  


  const onSubm = async(e)=>{
    e.preventDefault();
    const email = JSON.parse(localStorage.getItem('user')).email;
    console.log(email)
    let data = await fetch(`http://localhost:3003/prob/${email}`,{
      method :"Post",
      body : JSON.stringify({Problem}),
      headers:{
        "Content-type" : "Application/JSON"
      }

    })
    data = await data.json()
    console.log(data)
    changeText( ' your problem is registered....Our team will contact you soon');
    alert('your Problem is registered')
  }
  return (
    <div id="tr">

      <div id="help-sett">
        <br></br><br></br>
        <img src={image} width="400px" height="400px" id="img204"/>
        <h3 id="help-h3"> HELP ?</h3>


        

       

        <Form id="form-help">

          <Form.Group as={Col} md="5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Report a Problem :</Form.Label>
            <Form.Control as="textarea" rows={3} value={Problem} onChange={(e)=>{setProblem(e.target.value)} } />
          </Form.Group>

          <Button type="submit" id="help-btn" onClick={onSubm}> Submit</Button>
        </Form><br></br>
        
        <h6 class="help-h6" >  {text}</h6>
        <br></br>


        <h4 id="help-h4"> If You Encountered any problem .Please report it.Our team can fix it as soon as possible.</h4>


        



      </div>
    </div>
  )
}

export default Help