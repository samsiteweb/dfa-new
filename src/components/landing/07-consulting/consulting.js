import React from "react";
import "./consulting.css";
import Button from "../../button/button";

const Consulting = () => {
  return (
    <div className="consultingDiv">
      <div>
        <p className="consultingP">For Our Honorabe Clients</p>
        <h1 className="consultingH1">Speed/Quick consulting’</h1>
        <hr className="consultingHR" />
        <p className="consultingParPurple">
          Call us 24/7 at (888)123-4567 or fill out the form.
        </p>
        <p className="consultingPar">
          Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate
          libero et velit interdum, ac liquet odio mattis.”
        </p>
        <p className="consultingPar">
          “Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc
          vulputate libero et velit interdum, ac liquet odio mattis.”“Torem
          ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate
          libero et velit interdum, ac liquet odio mattis.”
        </p>
      </div>
      <div className="formDiv">
        <form>
          <div className="inputDiv">
            <input type="text" placeholder="your name*" className="input" />
            <input type="text" placeholder="your email*" className="input" />
            <input type="text" placeholder="your phone*" className="input" />
            <input type="text" placeholder="address" className="input" />
          </div>
          <textarea className="textarea">your message*</textarea>
          <div className="btnDiv">
            <Button>contact us now</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consulting;
