import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './update.css'
import { json, useParams } from 'react-router-dom';
const Update =()=> {
  
 

  
  const[email,setEmail] = useState('');
  const[name,setGame] = useState('');
  const[Phn,setPhn] = useState('');
  const[Age,setAge]=useState('');
  const[password,setPassword]=useState('');
  const params =useParams();
  

  useEffect(()=>{
    getDetails()

  },[])

  
  
  const getDetails = async()=>{ 
    const _id = JSON.parse(localStorage.getItem('user'))._id;
    console.warn(_id)
        let result = await fetch(`http://localhost:3003/gett/${_id}`,{
            method:"Get"
        });
     
        result =await result.json();
       
        console.warn(result)
        setGame(result.name)
        setEmail(result.email)
        setPhn(result.Phn)
        setAge(result.Age)

    }
  
  const onSub = async(e)=>{
    // console.log(auth)
    // let email = JSON.parse(auth).email
    // alert(email)
    const email = JSON.parse(localStorage.getItem('user')).email;
    const password = 1234345
  
          
    let results = await fetch(`http://localhost:3003/update/${email}`,{
      method : "put",
      body : JSON.stringify({name, Age, Phn, email,password}),
      headers :{
        "Content-type": "Application/Json"
      }

    })
    

    results =await results.json()
    console.log(results)
    if(results)
    alert('updated successfully')
    // localstorage.setitem('user')




  }

  return (
    <div id="tr">

        <div id="update">
            <Container id="update-container"><br></br>
            <h4 id="h4-update"> Update </h4>
        <Form>
            <div id="update-form">
            <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label> Age:</Form.Label>
        <Form.Control type="text"  value={name} onChange={(e)=>{setGame(e.target.name)} }/>
      </Form.Group>
   
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label> Age:</Form.Label>
        <Form.Control type="text/number"  value={Age} onChange={(e)=>{setAge(e.target.Age)}} />
      </Form.Group>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="text/number" value={Phn} onChange={(e)=>{setPhn(e.target.Phn)}}/>
      </Form.Group>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text/number" value={email} onChange={(e)=>{setEmail(e.target.email)} } />
      </Form.Group>
   
      </div>
      <Button type="submit" onClick={onSub}>Update</Button>
      
      </Form>
      </Container>

            
        </div>


        
    
    
    
    
    
    
    
    </div>
  )
}

export default Update