import React from 'react';
import { Link } from 'react-router-dom';
import ab1 from '../assets/ab1.jpg';
import ab2 from '../assets/ab2.jpg';
import ab3 from '../assets/about-1.jpg';
import '../css/AboutUs.css'; // Make sure to import your custom CSS

const AboutUs = () => {
    return (
        <div className="about-section bg-img-custom ">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="row d-flex">
                            <div className="col-lg-4">
                                <div className="image-column row ">
                                    <div className="col-12">
                                        <div className="box-custom ">
                                            <img src={ab1} alt="Decorative" className="mt-112 mb-3" width={226} height={261} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="box-custom">
                                            <img src={ab2} alt="Decorative" className="img-fluid mb-3" width={226} height={564} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="info-box">
                                    <img src={ab3} alt="Alice Merton" className="img-fluid" />
                                    <div className="info-overlay">
                                        <p>Alice Merton</p>
                                        <p>Founder of "Interia"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="about-title">Why Choose Us?</h1>
                        <p className="about-content">
                            Besides great interior design, there are other reasons to choose Interia. Here are some of the most popular
                            ones.
                        </p>
                        <ul className="list-unstyled feature-list">
                            <li className="feature-item">
                                <div className="icon-container">
                                    <div className="icon novi-icon linearicons-users2 icon-xl"></div>
                                </div>
                                <div className="feature-content">
                                    <h4>Professional Team</h4>
                                    <p>Our team includes only the best decorators and interior designers in the industry.</p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <div className="icon-container">
                                    <div className="icon novi-icon linearicons-lamp icon-xl"></div>
                                </div>
                                <div className="feature-content">
                                    <h4>Unusual Ideas</h4>
                                    <p>Our designers generate various yet always original ideas that will surely fit your needs.</p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <div className="icon-container">
                                    <div className="icon novi-icon linearicons-heart icon-xl"></div>
                                </div>
                                <div className="feature-content">
                                    <h4>Made with Respect</h4>
                                    <p>All our work is built around respect for our clients, great service, and creativity.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="about-button">
                            <Link to="#">Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
