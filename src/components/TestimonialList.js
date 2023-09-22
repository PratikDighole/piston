import React from 'react';
import {Row,Col, Card} from 'react-bootstrap';
import '../App.css';

const TestimonialList = ({ Testimonials }) => {
  return (
    <div id='dv7'>
  {Testimonials.map((testimonial, index) => (
      <Col
      key={index}
      xs={12}
      sm={6}
      md={3}
      className='cl10 testimonial-col'
      style={{ backgroundImage: `url(${testimonial.image})` }}>
    <div className='testimonial-name'>{testimonial.name}</div>
      <div className="testimonial-overlay">
        <div className="testimonial-info">
          <p>{testimonial.message}</p>
        </div>
      </div>
    </Col>
  ))}
    </div>
  );
};

export default TestimonialList;

