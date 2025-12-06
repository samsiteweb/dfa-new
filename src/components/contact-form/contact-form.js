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
    <section className="lightContactSection">
      <div className="lightContactContainer">
        
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lightContactHeader"
        >
          <h2 className="lightContactTitle">Get in Touch</h2>
          <p className="lightContactSubtitle">
            Have a legal question or need consultation? Send us a message and we'll get back to you promptly.
          </p>
        </motion.div>

        {/* Simple Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lightFormWrapper"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="lightForm">
            
            <div className="formRow">
              <div className="formField">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className={`lightInput ${errors.name ? 'inputError' : ''}`}
                  {...register("name")}
                />
                {errors.name && <span className="fieldError">{errors.name.message}</span>}
              </div>

              <div className="formField">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className={`lightInput ${errors.email ? 'inputError' : ''}`}
                  {...register("email")}
                />
                {errors.email && <span className="fieldError">{errors.email.message}</span>}
              </div>
            </div>

            <div className="formRow">
              <div className="formField">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className={`lightInput ${errors.phone ? 'inputError' : ''}`}
                  {...register("phone")}
                />
                {errors.phone && <span className="fieldError">{errors.phone.message}</span>}
              </div>

              <div className="formField">
                <input
                  type="text"
                  placeholder="Subject *"
                  className={`lightInput ${errors.subject ? 'inputError' : ''}`}
                  {...register("subject")}
                />
                {errors.subject && <span className="fieldError">{errors.subject.message}</span>}
              </div>
            </div>

            <div className="formField formFieldFull">
              <textarea
                rows="5"
                placeholder="Your Message *"
                className={`lightTextarea ${errors.message ? 'inputError' : ''}`}
                {...register("message")}
              ></textarea>
              {errors.message && <span className="fieldError">{errors.message.message}</span>}
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`statusAlert ${submitStatus === 'success' ? 'alertSuccess' : 'alertError'}`}>
                {submitStatus === 'success' ? (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="lightSubmitBtn"
            >
              {isLoading ? (
                <>
                  <span className="btnLoader"></span>
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

          {/* Contact Info */}
          <div className="lightContactInfo">
            <p className="infoText">Or reach us directly:</p>
            <div className="infoLinks">
              <a href="tel:+2348186963053" className="infoLink">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+234) 818 696 3053
              </a>
              <a href="mailto:official@dfasolicitors.com" className="infoLink">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                official@dfasolicitors.com
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactForm;
