import React, { useEffect, useRef, useState } from 'react';
import './TestimonialSlider.css';
import SectionHeader from 'ui-component/SectionHeader';

const testimonials = [
    {
        quote: 'Residy Home Decor completely transformed my living space! The design team listened to my needs and created a home that feels both luxurious and comfortable. Every guest compliments the interiors!',
        name: 'Priya Sharma',
        designation: 'Homeowner, Mumbai',
        src: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop'
    },
    {
        quote: 'From concept to execution, the Residy team was professional and creative. My kitchen and wardrobe are now both stylish and functional. Highly recommend for anyone looking for a modern makeover!',
        name: 'Rahul Verma',
        designation: 'Apartment Owner, Bangalore',
        src: 'https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop'
    },
    {
        quote: 'I loved the attention to detail and the personalized approach. The designers made sure every corner of my home reflected my personality. The process was smooth and the results are stunning!',
        name: 'Ananya Gupta',
        designation: 'Interior Enthusiast, Delhi',
        src: 'https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop'
    }
];

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageContainerRef = useRef(null);
    const autoplayRef = useRef(null);
    const quoteRef = useRef(null);

    const updateTestimonial = (direction) => {
        setActiveIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const animateWords = () => {
            if (!quoteRef.current) return;
            const quoteElement = quoteRef.current;
            quoteElement.innerHTML = testimonials[activeIndex].quote
                .split(' ')
                .map((word) => `<span class="word">${word}</span>`)
                .join(' ');
            const words = quoteElement.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(10px)';
                word.style.filter = 'blur(10px)';
                setTimeout(() => {
                    word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.filter = 'blur(0)';
                }, index * 20);
            });
        };
        const imageContainer = imageContainerRef.current;
        testimonials.forEach((testimonial, index) => {
            let img = imageContainer.querySelector(`[data-index="${index}"]`);
            if (!img) {
                img = document.createElement('img');
                img.src = testimonial.src;
                img.alt = testimonial.name;
                img.className = 'testimonial-image';
                img.dataset.index = index;
                imageContainer.appendChild(img);
            }
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const zIndex = testimonials.length - absOffset;
            const opacity = index === activeIndex ? 1 : 0.7;
            const scale = 1 - absOffset * 0.15;
            const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
            const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';
            img.style.zIndex = zIndex;
            img.style.opacity = opacity;
            img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
        });
        animateWords();
    }, [activeIndex]);

    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            updateTestimonial(1);
        }, 5000);

        return () => clearInterval(autoplayRef.current);
    }, []);

    const stopAutoplay = () => clearInterval(autoplayRef.current);

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '56rem',
                margin: 'auto',
                padding: '2rem 0'
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    marginBottom: '3.5rem',
                    marginTop: '3.5rem',
                    padding: '2.5rem 0 2.5rem 0'
                }}
            >
                <SectionHeader
                    heading="Hear From Our Happy Clients"
                    subheading="Real stories from real people who transformed their homes with Residy Home Decor."
                />
            </div>
            <div className="testimonial-container">
                <div className="testimonial-grid">
                    <div className="image-container" ref={imageContainerRef}></div>
                    <div className="testimonial-content">
                        <div>
                            <h3 className="name">{testimonials[activeIndex].name}</h3>
                            <p className="designation">{testimonials[activeIndex].designation}</p>
                            <p className="quote" id="quote" ref={quoteRef}></p>
                        </div>
                        <div className="arrow-buttons">
                            <button
                                className="arrow-button prev-button"
                                onClick={() => {
                                    stopAutoplay();
                                    updateTestimonial(-1);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                className="arrow-button next-button"
                                onClick={() => {
                                    stopAutoplay();
                                    updateTestimonial(1);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
