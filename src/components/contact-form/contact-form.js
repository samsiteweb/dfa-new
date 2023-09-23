import React from "react";
import "./contact-form.css";
import Button from "../button/button";

import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

const ContactForm = () => {
  return (
    <div className="ContactFormDivOutter">
      <div className="ContactFormDiv">
        <Flip right>
          <h1 style={{ color: "#310C4B" }}>Speed & Quick consulting</h1>
          <hr className="HR" />
          <p className="contactFormH4">
            Call or message this phone number (+234) 818 696 3053 or fill out the form and click send message.
          </p>
        </Flip>

        <Slide left>
          <div className="ContactFormInner">
            <form className="formDiv">
              <div className="inputDiv">
                <input
                  type="text"
                  placeholder="your name*"
                  className="inputTag"
                />
                <input
                  type="email"
                  placeholder="your email*"
                  className="inputTag"
                />
                <input
                  type="text"
                  placeholder="your phone*"
                  className="inputTag"
                />
                <input type="text" placeholder="address" className="inputTag" />
              </div>
              <textarea
                placeholder="your message*"
                className="messageInput"
              ></textarea>
              <div className="btnDiv">
                <Button>send message</Button>
              </div>
            </form>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ContactForm;
