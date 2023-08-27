import React from "react";
import "./about-need.css";

import Image from "../../../assets/img/about-need.jpg";
import Button from "../../button/button";

const AboutNeed = () => {
  return (
    <div className="needContainer">
      <div className="needDetails">
        <h2 className="needHeader">why you need us</h2>
        <p className="needP">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus{" "}
        </p>
        <p className="needP">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna.
        </p>
        <div className="buttonDiv">
          <Button>more about us</Button>
        </div>
      </div>
      <img src={Image} className="needImg" />
    </div>
  );
};

export default AboutNeed;
