import React from "react";
import '../Icon/service.css';
/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import services from "./pane-data";

/**
 * Our React component where we display data
 * -----------------------------
 */


function LoopPane() {
  return (
      <div>
      {services.map((service, index) => (
        <div key={index}>
          
        <div className="pane-container">
          <div className="text-container" id={service.id}>
            <div className="icon" id={service.id}></div>
            <div className="title">{service.title}</div>
            <div className="detail">{service.detail}</div>
            <div className="switch" id={service.id}></div>
          </div>
        </div>
        </div>
      ))}
      </div>
  );
}

export default LoopPane;
