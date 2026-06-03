import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./ContactUs.css";
import Swal from "sweetalert2";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

function ContactUs() {
  const form = useRef();
 const submitForm = (e) => {

  e.preventDefault();

  emailjs
    .sendForm(
      "service_cmj0s2e",
      "template_6dg95to",
      form.current,
      "RVUtNJRmg8kRJL90H"
    )
    .then(() => {

      Swal.fire({

        icon: "success",

        title: "Message Sent",

        text: "Our team will contact you shortly."

      });

      form.current.reset();

    })
   .catch((error) => {

  console.log(error);

  Swal.fire({

    icon: "error",

    title: "Oops!",

    text: error.text || "Failed to send message."

  });

});
};

  return (

    <div className="contact-container">

      {/* ===== HERO ===== */}

      <div className="contact-hero">

        <h1>Contact Us</h1>

        <p>
          We’re here to help you with orders,
          support and delicious experiences 🍕
        </p>

      </div>

      {/* ===== CONTACT SECTION ===== */}

      <div className="contact-wrapper">

        {/* ===== LEFT ===== */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions about your orders,
            delivery or menu items?
            Our support team is available
            anytime for you.
          </p>

          <div className="info-card">

            <FaPhoneAlt className="icon" />

            <div className="phone">

              <h3>Phone</h3>

              <a href="tel:+918179387963">+91 8179387963</a>

            </div>

          </div>

          <div className="info-card">

            <FaEnvelope className="icon" />

            <div>

              <h3>Email</h3>

          <a href="mailto:anilkumarmalluvalasa@gmail.com"> anilkumarmalluvalasa@gmail.com</a>

            </div>

          </div>

          <div className="info-card">

            <FaMapMarkerAlt className="icon" />

            <div>

              <h3>Location</h3>

              <span>Hyderabad, India</span>

            </div>

          </div>

          <div className="info-card">

            <FaClock className="icon" />

            <div>

              <h3>Working Hours</h3>

              <span>24/7 Customer Support</span>

            </div>
           
        
          </div>
        <a href="https://wa.me/918179387963"
           target="_blank"
           rel="noreferrer"
           className="whatsapp-btn">💬 Chat on WhatsApp </a>

        </div>

        {/* ===== RIGHT ===== */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <form ref={form} onSubmit={submitForm} >

          <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
            />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />

              <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  required
                />

           <textarea
              rows="6"
              name="message"
              placeholder="Write Your Message..."
              required>          
              </textarea>

            <button type="submit">

              Send Message

            </button>

          </form>

        </div>

      </div>
  <div className="faq-section">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-card">

    <h3>
      How long does delivery take?
    </h3>

    <p>
      Usually 20-30 minutes.
    </p>

  </div>

  <div className="faq-card">

    <h3>
      Can I cancel my order?
    </h3>

    <p>
      Yes, before preparation starts.
    </p>

  </div>

   <div className="faq-card">

  <h3>
    Do you offer free delivery?
  </h3>

  <p>
    Yes, orders above ₹500 qualify for free delivery.
  </p>

</div>

    <div className="faq-card">

      <h3>
        Which payment methods are accepted?
      </h3>

      <p>
        We accept UPI, Credit/Debit Cards and Cash on Delivery.
      </p>

    </div>

</div>

    </div>
  );
}

export default ContactUs;
