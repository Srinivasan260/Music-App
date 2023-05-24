import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './help.css'
import Button from 'react-bootstrap/esm/Button';
import image from './help.png'

const Help = () => {
  return (
    <div id="tr">

      <div id="help-sett">
        <br></br><br></br>
        <img src={image} width="400px" height="400px" id="img204"/>
        <h3 id="help-h3"> HELP ?</h3>


        

       

        <Form id="form-help">

          <Form.Group as={Col} md="5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Report a Problem :</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button type="submit" id="help-btn"> Submit</Button>
        </Form><br></br><br></br><br></br>

        <h4 id="help-h4"> If You Encountered any problem .Please report it.Our team can fix it as soon as possible.</h4>


        



      </div>
    </div>
  )
}

export default Help