import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Form, Button } from 'react-bootstrap';
import contact from '../assets/images/gallery/contact-us.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/contact.css';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SectionComponent from './SectionComponent';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="row">
                <div className="col-md-12">
                    <Header />
                    <SectionComponent title="Contact" />
                </div>
            </div>

            <div className="container con-main">
                <div className="row my-5">
                    <div className="col-lg-12">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-6">
                                <div className="">
                                    <img src={contact} alt="Contact Us" className="img" height={570} width={500} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <h6 className="highlight">Get In Touch</h6>
                                    <h3>Any Question?</h3>
                                    <h3> Write Down And Send Us</h3>
                                    <Form>
                                        <Form.Group controlId="formName" className="mb-3">
                                            <Form.Control type="text" placeholder="Enter your full name" />
                                        </Form.Group>
                                        <Form.Group controlId="formPhone" className="mb-3">
                                            <Form.Control type="text" placeholder="Phone number" />
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Control type="email" placeholder="Your email" />
                                        </Form.Group>
                                        <Form.Group controlId="formService" className="mb-3">
                                            <Form.Control type="text" placeholder="Service Description" />
                                        </Form.Group>
                                        <Form.Group controlId="formMessage" className="mb-3">
                                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="text-btn mb-3">
                                            GET A FREE QUOTE
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 text-center">
                    <div className="col-md-4">
                        <div className="p-3 border rounded">
                            <div className="header-container d-flex align-items-center justify-content-center">
                                <div className="line"></div>
                                <h6 className="text-element ms-2 ">Main Office</h6>
                            </div>
                            <div className="contact-info d-flex align-items-center mt-3 justify-content-center">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="my-2 p-2 text-icon" />
                                </div>
                                <div className="text-container ms-3">
                                    <p>
                                        <strong>San Francisco, CA</strong>
                                    </p>
                                    <p>20 Reynolds Neck Str-50121</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border rounded">
                            <div className="header-container d-flex align-items-center justify-content-center">
                                <div className="line"></div>
                                <h6 className="text-element ms-2 ">Make a Call</h6>
                            </div>
                            <div className="contact-info d-flex align-items-center mt-3 justify-content-center">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="my-2 p-2 text-icon" />
                                </div>
                                <div className="text-container ms-3">
                                    <p>
                                        <strong>+1 2345 678</strong>
                                    </p>
                                    <p>Mon - Sat: 09am - 08pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border rounded">
                            <div className="header-container d-flex align-items-center">
                                <div className="line"></div>
                                <h6 className="text-element ms-2 text-pink">Send a Mail</h6>
                            </div>
                            <div className="contact-info d-flex align-items-center mt-3">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="my-2 p-2 text-icon" />
                                </div>
                                <div className="text-container ms-3">
                                    <p>info@example.com</p>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 ">
                    <div className="col-md-12">
                        <div className="row map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.320998035827!2d85.10684881097488!3d25.627469777342423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed596b424d1893%3A0xd70ef2783ba424bf!2sResidy%20Group!5e0!3m2!1sen!2sin!4v1720612163749!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Contact;
