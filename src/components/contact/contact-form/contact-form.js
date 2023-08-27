import React from "react";
import "./contact-form.css";
import Button from "../../button/button";

const ContactForm = () => {
  return (
    <div className="consultingDiv">
      <div>
        <p className="consultingP">For Our Honorabe Clients</p>
        <h1 className="consultingH1">Our Contacts</h1>
        <hr className="consultingHR" />
        <p className="consultingPar">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p className="consultingPar">
          Address <br /> 245 King Street, Touterie Victoria 8520 Australia
        </p>
        <p className="consultingPar">
          Phone <br /> 0-123-456-78900-123-456-7890
        </p>
        <p className="consultingPar">
          Email <br /> sample@gmail.com
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
            <Button>book appointment</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
