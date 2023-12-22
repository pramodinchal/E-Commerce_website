import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import heroo from "../Assets/hero1.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="handicon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrowimg" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroo} alt="heroimg" />
      </div>
    </div>
  );
}

export default Hero;
