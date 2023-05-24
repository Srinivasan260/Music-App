import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import signup from './settings/signup3.png'

import './signup.css'




const Signy = () => {
  const [name, setName] = useState();
  const [Age, setAge] = useState();
  const [Phn, setPhn] = useState();
  const [password, setPsw] = useState();
  const [email, setEmail] = useState();
  const [Error, setError] = useState(false);
  const navigate = useNavigate('')

  const OnSubmit = async (e) => {
    if (!name || !Age || !Phn || !password || !email) {
      setError(true)
      return false
    }
    else {
      console.log(name, Age, Phn, password, email)
      let result = await fetch('http://localhost:3003/signup', {
        method: "post",
        body: JSON.stringify({ name, Age, Phn, password, email }),
        headers: {
          "Content-type": "Application/JSON"
        }

      })
      result = await result.json()
      console.log(result)
      alert("signup successfully")
      navigate('/login')

    }
  }


  return (
    <>
      <div id="tr">
        <div id="td">
        <img src={signup} id="img231" width="400px" height="400px" />
        <br></br>  <Container id="signup-container"><br></br><br></br>
            <h3><u><b>SIGN UP </b></u></h3><br></br>
            <Form>
              <div id="signup-input">
                <Form.Group className="mb-1" as={Col} md="11" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />
                  {Error && !name && <span class="tre"> enter your name</span>}

                </Form.Group>
                <Form.Group className="mb-1" as={Col} md="11" controlId="formBasicEmail">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="age" placeholder="Enter age" value={Age} onChange={(e) => { setAge(e.target.value) }} />
                  {Error && !Age && <span class="tre"> enter your age</span>}

                </Form.Group>
                <Form.Group className="mb-1" as={Col} md="11" controlId="formBasicEmail">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="phonenumber" value={Phn} onChange={(e) => { setPhn(e.target.value) }} />
                  {Error && !Phn && <span class="tre"> enter your phn</span>}

                </Form.Group>
                <Form.Group className="mb-1" as={Col} md="11" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter name" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  {Error && !email && <span class="tre"> enter your email</span>}

                </Form.Group>

                <Form.Group className="mb-1" as={Col} md="11" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPsw(e.target.value) }} />
                  {Error && !password && <span class="tre"> enter your password</span>}
                </Form.Group>
              </div><br></br>

              <Button class="btn" variant="primary" onClick={OnSubmit} type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>

      </div>
    </>
  )
};

export default Signy;
