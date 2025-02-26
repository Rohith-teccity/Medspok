import React from "react";
import "./Who.css";

const Who = () => {
  return (
    <div className="full-screen-container">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img src="/images/Group 1.png" alt="Question Mark" className="img-fluid" />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <hr />
            <p>
              Medspok is a leading web application and development company based in Chennai, India.
            </p>
            <p>
              Renowned as the best WordPress development company in Chennai, we boast a team of passionate experts dedicated to creating stunning websites and web portals.
            </p>
            <p>
              Whether you need to establish an online presence or enhance your digital capabilities, Medspok is your ultimate solution.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
