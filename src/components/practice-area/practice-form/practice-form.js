import React from "react";
import "./practice-form.css";
import Button from "../../button/button";

const PracticeForm = () => {
  return (
    <div className="practiceFormDiv">
      <p>area of practice</p>
      <h1 className="practiceFormHeader">how can we help you?</h1>
      <hr className="practiceFormHR" />

      <div className="consultingDiv3">
        <div>
          <p className="consultingParPurple">
            Call us 24/7 at (888)123-4567 or fill out the form.
          </p>
          <p className="consultingPar">
            Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc
            vulputate libero et velit interdum, ac liquet odio mattis.”
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
    </div>
  );
};

export default PracticeForm;
