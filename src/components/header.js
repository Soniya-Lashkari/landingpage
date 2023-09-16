import "./header.css";
import React from "react";
import Logo1 from "../image/logo 15 1 (1).png";
import image1 from "../image/Ellipse 146.png";
import image2 from "../image/Ellipse 147.png";
import image3 from "../image/social media dissect 1.png";

const header = () => {
  return (
    <div className="head">
      <img src={Logo1} />
      <div className="center">
        <p> Featured on </p>
        <img src={image3} />
      </div>

      <div className="logo1">
        <img src={image1} />
      </div>
      <div className="logo2">
        <img src={image2} />
      </div>
    </div>
  );
};
export default header;

