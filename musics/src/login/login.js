import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './login.css'
import login from './login3.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPsw] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate('');
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (!email || !password) {
    //   setError(true)
    //   return false
    // }else{
      

    console.log("hi")
    console.log(email, password)
    let result = await fetch('http://localhost:3003/login', {
      method: 'Post',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "Application/Json"
      }
    })
    console.log('8')
    result = await result.json()
    console.log(result)
    alert(result)
    if (result) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/')

    
  }

  }

  return (
    <>

      <div id="tr">
        <div id="log">
        <img src={login} id="img230" width="400px" height="400px" />
          <Container id="con"><br></br>

            <h4><u><b> Login</b></u> </h4><br></br>
           

            <Form >
              <div id="input">

                <Form.Group className="mb-3" as={Col} md="11" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>

                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  {error && !email && <span class="tre">enter the mail id</span>}
                </Form.Group>
                

                <Form.Group className="mb-3" as={Col} md="11" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPsw(e.target.value) }} />
                  {error && !password && <span class="tre">enter the password id</span>}
                </Form.Group>
                
              </div>
              <Button variant="primary" type="submit" id="btn3" onClick={onSubmit}>
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </div>



    </>
  )
}


export default Login