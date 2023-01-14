import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from "react-redux";
import { Col, Row, Form, Button } from "react-bootstrap";

function Profile(){
    
    const slug = useSelector((state) => state.slug.value);

    return (
        <div className='container'>
            <h1>Welcome to {slug.name}</h1>
            <p>Slug: {slug.slug}</p>
            <p>About: {slug.description}</p>
        </div>
    );
}

export default Profile;