import React from "react";
import "./AllServices.css";

const services = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Cyber Security",
    description:
      "Protect your enterprise network from the most sophisticated cyber-attacks with the highest caliber of security and the world’s highest-performing security gateways. Our advanced threat intelligence, AI-driven defense mechanisms, and real-time monitoring ensure proactive protection against evolving cyber threats. With end-to-end encryption, zero-trust architecture, and next-gen firewalls, we provide unmatched security, safeguarding your critical data and IT infrastructure.",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "AI",
    description:
      "We offer advanced AI-driven data analytics solutions, enabling businesses to extract valuable insights, detect anomalies, and optimize decision-making. Our machine learning-powered predictive analytics helps forecast trends, enhance operational efficiency, and improve customer experiences. We provide automated data processing solutions that streamline workflows, reduce manual effort, and ensure real-time decision-making for smarter business operations.",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Digital Marketing",
    description:
      "We provide result-driven digital marketing services, including SEO, PPC, social media marketing, and content strategy to enhance brand visibility and engagement. Our data-driven approach ensures targeted advertising, lead generation, and conversion optimization for maximum ROI. With advanced analytics and AI-powered marketing tools, we create personalized campaigns that drive business growth and customer retention.",
  },
  {
    id: 4,
    image: "/images/service4.png",
    title: "Wordpress Development",
    description:
      "We offer AI-powered data analytics solutions that help businesses extract meaningful insights, optimize processes, and drive informed decision-making. Our machine learning models identify patterns, detect anomalies, and provide predictive analytics for future trends. With automated data processing and real-time analytics, we enhance operational efficiency and enable businesses to stay ahead in a data-driven world.",
  },
  {
    id: 5,
    image: "/images/service5.png",
    title: "Cloud Computing",
    description:
      "We provide enterprise-grade cybersecurity solutions, including next-gen firewalls, AI-driven threat detection, and real-time monitoring to safeguard your network. Our zero-trust architecture and advanced encryption ensure maximum protection against cyber threats and data breaches. With cutting-edge security gateways and proactive defense mechanisms, we help businesses stay resilient against even the most sophisticated attacks.",
  },
  {
    id: 6,
    image: "/images/service6.png",
    title: "Network Management",
    description:
      "We offer advanced network management solutions, ensuring seamless connectivity, optimal performance, and robust security for businesses. Our AI-driven monitoring and automation detect and resolve network issues in real time, minimizing downtime and enhancing efficiency. With scalable infrastructure, cloud integration, and proactive threat management, we provide a reliable and secure network environment for uninterrupted operations.",
  },
  {
    id: 7,
    image: "/images/service7.png",
    title: "Mobile Application",
    description:
      "We provide cutting-edge mobile application development services, ensuring high performance, robust security, and seamless user experience. Our apps are built with advanced frameworks, AI-driven features, and end-to-end encryption to protect user data and prevent cyber threats. With scalable architecture and cross-platform compatibility, we deliver secure, innovative, and future-ready mobile solutions for businesses.",
  },
  {
    id: 8,
    image: "/images/service8.png",
    title: "IT Consulting & Advisory",
    description:
      "Our IT Consulting & Advisory services help businesses leverage the right technology to drive growth, efficiency, and innovation. We provide expert guidance on IT strategy, digital transformation, and infrastructure optimization to align technology with business goals. With proactive management and continuous monitoring, we ensure seamless implementation and long-term success in an ever-evolving digital landscape.",
  },
];

const AllServices = () => {
  return (
    <div className="all-services">
      {/* Title */}
      <h1 className="services-title">All Services</h1>

      {/* Subtitle with Icons */}
      <h3 className="services-subtitle">
        <img src={"images/icon1.png"} alt="icon" className="icon" />
        Accelerate your growth with our cutting-edge digital solutions
        <img src={"images/icon2.png"} alt="icon" className="icon" />
      </h3>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-img"
            />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
