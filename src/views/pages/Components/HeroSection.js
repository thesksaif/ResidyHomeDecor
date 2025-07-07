// src/Components/HeroSection.js
import React, { useState, useEffect, useRef } from 'react';
import bGVideo from '../assets/heroSectionBG.mp4';
import v2 from '../assets/v2.mp4';
import v3 from '../assets/v3.mp4';
import v4 from '../assets/v4.mp4';
import v5 from '../assets/v5.mp4';
import Header from './Header';

const videos = [bGVideo, v2, v3, v4, v5];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnd = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextVideoIndex);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlayThrough = () => {
      if (!isPlaying) {
        videoElement.play();
        setIsPlaying(true);
      }
    };

    const handleEnded = () => {
      handleVideoEnd();
      setIsPlaying(false); // Reset isPlaying state to prepare for next video
    };

    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex, isPlaying]);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.src = videos[currentVideoIndex];
    videoElement.load();
  }, [currentVideoIndex]);

  return (
    <div className="hero-container">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop={false}
        muted
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <div className="overlay">
        <div className="content">
          <h1 className="heading-title">Welcome to Our Interior Design Shop</h1>
          <p className="title-desc">
            Your one-stop shop for all things interiors
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
