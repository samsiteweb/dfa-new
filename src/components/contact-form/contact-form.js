import React from "react";
import "./contact-form.css";
import Button from "../button/button";

const ContactForm = () => {
  return (
    <div className="ContactFormDivOutter">
      <div className="ContactFormDiv">
        <p style={{ color: "#828282" }}>
          Any Legal Problem ? We are ready to fight for our clients!!
        </p>
        <h1 style={{ color: "#310C4B" }}>Speed & Quick consulting</h1>
        <hr className="HR" />
        <h4 className="contactFormH4">
          Call us 24/7 at (234)818 696 3053 or fill out the form.
        </h4>

        <div className="ContactFormInner">
          <form className="formDiv">
            <div className="inputDiv">
              <input type="text" placeholder="your name*" className="inputTag" />
              <input type="email" placeholder="your email*" className="inputTag" />
              <input type="text" placeholder="your phone*" className="inputTag" />
              <input type="text" placeholder="address" className="inputTag" />
            </div>
            <textarea className="messageInput">your message*</textarea>
            <div className="btnDiv">
              <Button>send message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
