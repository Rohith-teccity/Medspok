import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // External CSS

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Column 1 - Image + Paragraph */}
          <Col md={5} className="footer-col">
            <img
              src="/images/Medspok Logo-05.png"
              alt="Company Logo"
              className="footer-logo"
            />
            <p className="footer-p">
              Medspok is a Website Development, Web Application, Digital
              Marketing and Mobile Application leading Company in Chennai. We
              are all about the web. You would like to do anything with online
              then, we are the ones you call.
            </p>
          </Col>

          {/* Column 2 - Useful Links */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/about">Careers</a>
              </li>
              <li>
                <a href="/services">Request a quote</a>
              </li>
              <li>
                <a href="/contact">Privacy Policy</a>
              </li>
            </ul>
          </Col>

          {/* Column 3 - Contact */}
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-p">Email: support@medspock.in</p>
            <p className="footer-p">Phone: +91 6383988344</p>
            <p className="footer-p">
              Address: RMZ Millenia Business Park Tower 1 Perungudi, Chennai
            </p>
            <p className="footer-p">Working Hours: 9AM - 5PM</p>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-copyright">
              Copyright © Medspok. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;