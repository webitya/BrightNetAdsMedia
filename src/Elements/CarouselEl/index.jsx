import React from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';
import './CarouselEl.css'; // Import the CSS file for additional styling

const CarouselEl = () => {
  const nextArrow = (
    <div className="arrow right-arrow">
      <RightOutlined style={{ fontSize: '28px' }} />
    </div>
  );

  const prevArrow = (
    <div className="arrow left-arrow">
      <LeftOutlined style={{ fontSize: '28px' }} />
    </div>
  );

  return (
    <div className="carousel-container">
      <Carousel 
        autoplay 
        autoplaySpeed={1500} // Auto-slide every 1.5 seconds
        nextArrow={nextArrow} 
        prevArrow={prevArrow}
        dotPosition="bottom"
        effect="scrollx" // Change transition effect to sliding
      >
        {/* Slide 1 */}
        <div className="carousel-slide slide-1">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Elevate Your Business</h1>
            <p className="carousel-description">Unleash the full potential with our bespoke solutions.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Get Started</Button></Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide slide-2">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Innovative Solutions</h1>
            <p className="carousel-description">Explore our cutting-edge services designed for your success.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Learn More</Button></Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide slide-3">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Your Success Partner</h1>
            <p className="carousel-description">Partner with us to accelerate your growth journey.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Contact Us</Button></Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselEl;
