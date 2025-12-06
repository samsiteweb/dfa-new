import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact-form.css";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  subject: z.string().min(3, "Subject is required").max(150, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_svl7wnq";
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_izb2pdh";
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "94AG-Sdq8lKAy5zC3";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_name: "DFA Solicitors Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully! We'll respond within 24 hours.");
      reset();
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contactFormSection">
      <div className="contactFormContainer">
        <div className="contactFormGrid">
          {/* Left Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contactFormInfo"
          >
            <div className="formInfoContent">
              <h2 className="formInfoTitle">Ready to Work With Us?</h2>
              <p className="formInfoText">
                Tell us about your legal needs and we'll connect you with the right expertise. 
                Our team is committed to providing professional, timely, and effective legal solutions.
              </p>

              <div className="formInfoFeatures">
                <div className="formFeature">
                  <div className="featureIcon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="featureTitle">Fast Response</h4>
                    <p className="featureText">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="formFeature">
                  <div className="featureIcon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="featureTitle">Confidential</h4>
                    <p className="featureText">Your information is secure and confidential</p>
                  </div>
                </div>

                <div className="formFeature">
                  <div className="featureIcon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="featureTitle">Expert Team</h4>
                    <p className="featureText">Over 30 years of combined experience</p>
                  </div>
                </div>
              </div>

              <div className="formInfoFooter">
                <p className="formInfoFooterText">Prefer to talk? Call us directly:</p>
                <a href="tel:+2348186963053" className="formInfoPhone">
                  (+234) 818 696 3053
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contactFormWrapper"
          >
            <div className="contactFormCard">
              <h3 className="formCardTitle">Send us a message</h3>
              <p className="formCardSubtitle">Fill out the form below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="modernForm">
                {/* Name */}
                <div className="formGroup">
                  <label htmlFor="name" className="formLabel">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`formInput ${errors.name ? 'formInputError' : ''}`}
                    {...register("name")}
                  />
                  {errors.name && <p className="formError">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="formGroup">
                  <label htmlFor="email" className="formLabel">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`formInput ${errors.email ? 'formInputError' : ''}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="formError">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="formGroup">
                  <label htmlFor="phone" className="formLabel">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className={`formInput ${errors.phone ? 'formInputError' : ''}`}
                    {...register("phone")}
                  />
                  {errors.phone && <p className="formError">{errors.phone.message}</p>}
                </div>

                {/* Subject */}
                <div className="formGroup">
                  <label htmlFor="subject" className="formLabel">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className={`formInput ${errors.subject ? 'formInputError' : ''}`}
                    {...register("subject")}
                  />
                  {errors.subject && <p className="formError">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div className="formGroup">
                  <label htmlFor="message" className="formLabel">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us more about your legal needs..."
                    className={`formTextarea ${errors.message ? 'formInputError' : ''}`}
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="formError">{errors.message.message}</p>}
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div className={`formStatus ${submitStatus === 'success' ? 'formStatusSuccess' : 'formStatusError'}`}>
                    <div className="formStatusIcon">
                      {submitStatus === 'success' ? (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <p>{statusMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`formSubmitBtn ${isLoading ? 'formSubmitBtnLoading' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <span className="btnSpinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
