import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../features/slug';
import { Formik } from 'formik';


function Attendanttest() {
    const slug = useSelector((state) => state.slug.value);
    const [event, setEvent] = useState(slug.slug);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Anywhere in your app! {event} </h1>
            <Formik
            initialValues={{ name: '', email: '', phonenumber: '', company: '', designation: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                } else if (!/^[A-Z`]{3,}$/i.test(values.name)) {
                    errors.name = 'Invalid name';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.phonenumber) {
                    errors.phonenumber = 'Required';
                } else if (!/^[0-9._()+-]{7,}$/i.test(values.phonenumber)) {
                    errors.phonenumber = 'Invalid Phonenumber';
                }
                if (!values.company) {
                    errors.company = 'Required';
                } else if (!/^[A-Z0-9 `]{3,}$/i.test(values.company)) {
                    errors.company = 'Invalid Company Name';
                }
                if (!values.designation) {
                    errors.designation = 'Required';
                } else if (!/^[A-Z. ]{3,}$/i.test(values.designation)) {
                    errors.designation = 'Invalid Designation';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    try { 
                        const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                        };
                
                        const body = values;
                        
                        axios.post('http://localhost:8080/api/attendees/events/'+event, body)
                        .then(res => {
                            if (res.status !== 200 || res.data.status !== "success") {
                                console.log(res.data);
                                //setEvent(res.data);
                                values.name = "";
                                values.email = "";
                                values.phonenumber = "";
                                values.company = "";
                                values.designation = "";
                                //dispatch(login({id: res.data.id, name: res.data.name, slug: res.data.slug, description: res.data.description, status: true }));
                                return
                            }
                        })
                    } catch (err) {
                        console.log("Oops! api, please try again");
                    }
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <Form onSubmit={handleSubmit}>
                
                <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                    />
                {errors.name && touched.name && errors.name}
                <Form.Control.Feedback type="invalid" tooltip>
                {errors.name && touched.name && errors.name}
                        </Form.Control.Feedback>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                />
                {errors.email && touched.email && errors.email}
                <input
                    type="text"
                    name="phonenumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phonenumber}
                    required
                />
                {errors.phonenumber && touched.phonenumber && errors.phonenumber}
                <input
                    type="text"
                    name="company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                    required
                />
                {errors.company && touched.company && errors.company}
                <input
                    type="text"
                    name="designation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.designation}
                    required
                />
                {errors.designation && touched.designation && errors.designation}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
            <h2>Powered by BlunapDigital</h2>
        </div>
    );
}

export default Attendanttest;