import React from "react";
import serviceData from "../../data/services";
import Service from "../../components/service/Service";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services_wrapper">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              service={service.service}
              text={service.text}
              serial={service.serial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
