import React, { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6jp3hsl', 'template_htfjj34', form.current, 'NJQOqznCRy-P8c_fy')
      .then((result) => {
          console.log(result.text);
          toast.success('Message send successfully', {id:'success-message'})
          e.target.reset();
      }, (error) => {
        toast.error(error.text, {id:'error-message'})
        console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;