import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Industries.css";

const industries = [
  { name: "IT SOFTWARE", img: "/images/IT SOFTWARE.png" },
  { name: "Hospital Management", img: "/images/hospital.png" },
  { name: "Schools & Collages", img: "/images/School.png" },
  { name: "E - commerce", img: "/images/commerce.png" },
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="text-white">Industries We Serve</h2>
        <hr className="divider" />
        <p className="text-white description">
          With our extensive knowledge and expertise, we have successfully served a
          wide range of industry verticals. Our experience enables us to understand
          industry-specific needs and deliver tailored solutions that drive results.
        </p>
        <div className="row">
          {industries.map((industry, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="industry-card">
                <img src={industry.img} alt={industry.name} className="industry-image" />
                <div className="industry-footer">{industry.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
