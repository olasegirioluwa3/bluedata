
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from "react-redux";
import { Col, Row, Form, Button } from "react-bootstrap";
import Attendant from './Attendant';
import Login from './Login';
import Logo from './../assets/images/blunap-logo-long.jpeg';

function App(){
  const slug = useSelector((state) => state.slug.value);

  return (
    <div className='container' style={{display:'flex', flexDirection:'column', height:'100%', width:'100%', margin:'auto', alignItems:'center', justifyContent:'center'}}>
      {/*<Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="../../logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  */}
      <div className='container'>
        <img
          src={Logo}
          width='100%'
          height="100%"
          className="d-inline-block align-top"
          alt="Blunap logo"
        />
      </div>
        
      <h1>
        <center>
          { slug.slug }
        </center>
      </h1>
      { slug.status ? <Attendant /> : <Login /> }
    </div>
  );

}

export default App;