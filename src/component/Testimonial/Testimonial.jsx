import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Shankar",
    review:
      "Medspok excels in creating top-notch websites and digital marketing strategies that drive growth and visibility. Their expert team delivers innovative solutions, ensuring businesses achieve remarkable online success.",
  },
  {
    name: "Kumaresan",
    review:
      "Medspok excels in creating top-notch websites and digital marketing strategies that drive growth and visibility. Their expert team delivers innovative solutions, ensuring businesses achieve remarkable online success.",
  },
  {
    name: "Hari",
    review:
      "Medspok excels in creating top-notch websites and digital marketing strategies that drive growth and visibility. Their expert team delivers innovative solutions, ensuring businesses achieve remarkable online success.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h2 className="text-white">What they are saying about us</h2>
      <hr className="divider" />
      <Carousel interval={3000} indicators={true} controls={false} className="carousel-wrapper">
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <Card className="testimonial-card">
                <Card.Body>
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <Card.Text className="text-white">{testimonial.review}</Card.Text>
                  <Card.Title className="text-white fw-bold">{testimonial.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
