import React from 'react'
import { useState } from 'react';
//import { useDispatch } from 'react-redux'
//import { login, logout } from "../features/user"
import { Col, Row, Form, Button } from "react-bootstrap";
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [event, setEvent] = useState("");
  const [slug, setSlug] = useState([]);
  const [email, setEmail] = useState([]);  

  //function checkRecord () {
  const checkRecord = () => {
    //e.preventDefault();
    if ((slug == "") || (email == "")) {
      console.log('Passwords do not match');
    } else {
      const newRecord = {
        slug,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify(newRecord);
        /*
        const res = axios.get('http://localhost:8080/api/events/'+slug, body, config);
        setEvent(res);
        console.log(JSON.stringify(res));
        console.log("no code error");*/
        axios.get('http://localhost:8080/api/events/'+slug)
        .then(res => {
          if (res.status !== 200 || res.data.status !== "success") {
            console.log(res.data);
            setEvent(res.data);
            return
          }
        })
      } catch (err) {
        //console.error(err.response.data);
        console.log("there is failure");
      }
    }
  };
  return (
    
    <div className='container'>
      <h1>{ JSON.stringify(event) }</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Event Slug { slug }
          </Form.Label>
          <Col sm="10">
            <Form.Control type='text' name='slug' onChange={(e) => (setSlug(e.target.value))} placeholder="event-2023" value={slug} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Email { email }
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" name='email' onChange={(e) => (setEmail(e.target.value))} placeholder="Email" value={email} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            { event.description }
          </Form.Label>
          <Col sm="10">
            <Button className="mb-3 sm-12" type='button' onClick={ checkRecord }>Start</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login