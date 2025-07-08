import React, { useState, useEffect, useRef, useCallback } from 'react';
import bGVideo from '../assets/heroSectionBG.mp4';
import v2 from '../assets/v2.mp4';
import v3 from '../assets/v3.mp4';
import v4 from '../assets/v4.mp4';
import v5 from '../assets/v5.mp4';
import '../css/Footer.css';

const videos = [bGVideo, v2, v3, v4, v5];

const Footer = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnd = useCallback(() => {
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextVideoIndex);
    }, [currentVideoIndex]);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleCanPlayThrough = () => {
            videoElement.play();
        };

        const handleEnded = () => {
            handleVideoEnd();
        };

        videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.addEventListener('ended', handleEnded);

        return () => {
            videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [currentVideoIndex, handleVideoEnd]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.src = videos[currentVideoIndex];
        videoElement.load();
    }, [currentVideoIndex]);

    return (
        <footer className="footer text-white">
            <video ref={videoRef} className="video-background" autoPlay loop={false} muted>
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="Footer container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About ResidyHomeDecor</h5>
                        <p>
                            ResidyHomeDecor is a leading interior design and home decor company. We transform spaces with creative design,
                            quality materials, and expert craftsmanship. Let us help you create a home that reflects your style and needs.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Book Consultation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Store Help</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white">
                                    License
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Refund Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Submit a Request
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Berry Eco-System</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white">
                                    Bootstrap 5
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Angular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    CodeIgniter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    .Net
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Shopify <span className="badge badge-info">Upcoming</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Vuetify 3 <span className="red-dot"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Full Stack
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Django
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Flask
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Free Versions</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white">
                                    Free React MUI
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Free Bootstrap 5
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Free Angular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Free Django
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row bottom-footer d-flex align-items-center">
                <div className="col-md-6 text-start mt-4">
                    <p>
                        &copy; ResidyHomeDecor is managed by{' '}
                        <a href="#" className="text-white">
                            Webspidy
                        </a>
                    </p>
                </div>
                <div className="col-md-6 footer-icons text-end">
                    <a href="#">
                        <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github text-white"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-slack text-white"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
