// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Send');
      alert('Message sent!');
    }, 2000);
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">{formStatus}</button>
      </form>
    </div>
  );
};

export default Contact;
