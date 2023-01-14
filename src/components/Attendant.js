import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import axios, { Axios } from 'axios';
import { useState } from 'react';
import Thankyou from './Thankyou';
import ThankyouGif from './../assets/images/thankyou.gif';


/*
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phonenumber: yup.string().required(),
  company: yup.string().required(),
  designation: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});
*/
function thankYou() {
    //alert("hi");
    return (
        <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>);
}

function Attendant() {

    const slug = useSelector((state) => state.slug.value);
    const [attendee, setAttendee] = useState([]);
    const [event, setEvent] = useState(slug.slug);
    const [name, setName] = useState([]);
    const [done, setDone] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 5000);
        
    }

    return (
        
        <div className='container'>
            {/* done ? <Thankyou /> : null */}
          <Formik
        initialValues={{ name: '', email: '', phonenumber: '', company: '', designation: '' }}
        validate={values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            } else if (!/^[A-Z `]{3,}$/i.test(values.name)) {
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
            } else if (!/^[A-Z0-9` ]{3,}$/i.test(values.company)) {
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
                    axios.post('http://192.168.137.1:8080/api/attendees/events/'+event, body)
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
                            //setDone(true);
                            handleShow();
                            return;
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
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <Form onSubmit={handleSubmit}>
                <Row className="mb-6">
                    <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik101"
                    className="position-relative"
                    >
                    <Form.Label>Name </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.name && touched.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationFormikEmail" className="position-relative">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">📧</InputGroup.Text>
                        <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email && touched.email}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik105"
                    className="position-relative"
                    >
                    <Form.Label>Phonenumber</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">☎️</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Phonenumber"
                            name="phonenumber"
                            value={values.phonenumber}
                            onChange={handleChange}
                            isInvalid={!!errors.phonenumber}
                        />
                    </InputGroup>

                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.phonenumber && touched.phonenumber}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik103"
                    className="position-relative"
                    >
                    <Form.Label>company</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        isInvalid={!!errors.company}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.company && touched.company}
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik104"
                    className="position-relative"
                    >
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="CEO"
                        name="designation"
                        value={values.designation}
                        onChange={handleChange}
                        isInvalid={!!errors.designation}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.designation && touched.designation}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            
                <Form.Group className="position-relative mb-3">
                    <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik106"
                    feedbackTooltip
                    />
                </Form.Group>
                
                <Button type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>
        )}
        </Formik>
        <Navbar bg="light" fixed="bottom">
            <Container>
                <Navbar.Brand>
                    <center>Powered by BlunapDigital</center>
                </Navbar.Brand>
            </Container>
        </Navbar>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>
                <center>
                    Done
                </center>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={ThankyouGif}
                    width='100%'
                    height="100%"
                    className="d-inline-block align-top"
                    alt="Blunap logo"
                />
            </Modal.Body>
        </Modal>

        </div>
    );
}
export default Attendant;
