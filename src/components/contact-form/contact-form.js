import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contact-form.css"; // Make sure to import your CSS file
import Button from "../button/button";

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      isLoading: false, // Add this property
    };
  }

  handleSubmit = async (e) => {
    console.log("got herer")
    e.preventDefault();

    // Set loading to true when the form is submitted
    this.setState({ isLoading: true });

    try {
      const response = await emailjs.sendForm(
        "service_svl7wnq", // Replace with your Email.js service ID
        "template_izb2pdh", // Replace with your Email.js template ID
        e.target
      );

      console.log("Email sent successfully!", response.text);
      alert("Email sent successfully!"); // Display a success message to the user
    } catch (error) {
      console.error("Email could not be sent:", error);
      alert("Email could not be sent!"); // Display an error message to the user
    }

    // Reset loading to false after email is sent or an error occurs
    this.setState({ isLoading: false });

    // Clear the form after submission
    this.setState({ name: "", email: "", phone: "", address: "", message: "" });
  };

  handleInputChange = (e) => {
    console.log("got herer")
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, phone, address, message, isLoading } = this.state;

    return (
      <div className="ContactFormDivOutter">
        <div className="ContactFormDiv">
          <h4 className="ContactFormP">
            Any Legal Problem? We are ready to fight for our clients!!
          </h4>
          <h1 style={{ color: "#310C4B" }}>Speed & Quick consulting</h1>
          <hr className="HR" />
          <p className="contactFormH4">
            Call us 24/7 at (234)818 696 3053 or fill out the form.
          </p>

          <div className="ContactFormInner">
            <form onSubmit={this.handleSubmit} className="formDiv">
              <div className="inputDiv">
                <input
                  type="text"
                  placeholder="your name*"
                  className="inputTag"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <input
                  type="email"
                  placeholder="your email*"
                  className="inputTag"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  placeholder="your phone*"
                  className="inputTag"
                  name="phone"
                  value={phone}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  placeholder="address"
                  className="inputTag"
                  name="address"
                  value={address}
                  onChange={this.handleInputChange}
                />
              </div>
              <textarea
                placeholder="your message*"
                className="messageInput"
                name="message"
                value={message}
                onChange={this.handleInputChange}
              ></textarea>

              <div className="btnDiv">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;