import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import "./contact-form.css";
import Button from "../button/button";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
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
    console.log("Form submitted", data);
    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_svl7wnq";
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_izb2pdh";
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "94AG-Sdq8lKAy5zC3";

      // Create template params
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        address: data.address || "Not provided",
        message: data.message,
        to_name: "DFA Solicitors Team",
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully!", response.text);
      setSubmitStatus("success");
      setStatusMessage("Email sent successfully! We'll get back to you soon.");
      reset(); // Clear the form
    } catch (error) {
      console.error("Email could not be sent:", error);
      setSubmitStatus("error");
      setStatusMessage("Email could not be sent! Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="formDiv">
            <div className="inputDiv">
              <div>
                <input
                  type="text"
                  placeholder="your name*"
                  className="inputTag"
                  {...register("name")}
                  aria-label="Your name"
                />
                {errors.name && (
                  <p className="errorText">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="your email*"
                  className="inputTag"
                  {...register("email")}
                  aria-label="Your email"
                />
                {errors.email && (
                  <p className="errorText">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="your phone*"
                  className="inputTag"
                  {...register("phone")}
                  aria-label="Your phone"
                />
                {errors.phone && (
                  <p className="errorText">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="address"
                  className="inputTag"
                  {...register("address")}
                  aria-label="Your address"
                />
                {errors.address && (
                  <p className="errorText">{errors.address.message}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                placeholder="your message*"
                className="messageInput"
                {...register("message")}
                aria-label="Your message"
              ></textarea>
              {errors.message && (
                <p className="errorText">{errors.message.message}</p>
              )}
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={
                  submitStatus === "success"
                    ? "statusMessage successMessage"
                    : "statusMessage errorMessage"
                }
              >
                {statusMessage}
              </div>
            )}

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

export default ContactForm;
