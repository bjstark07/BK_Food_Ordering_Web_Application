import React, { useState } from 'react';
import './ContactForm.css'; // You can customize styling here

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Firebase logic (replace with your own config)
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT.firebaseapp.com",
      databaseURL: "https://YOUR_PROJECT.firebaseio.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    if (!window.firebase) {
      alert("Firebase SDK not loaded.");
      return;
    }

    if (!window.firebase.apps?.length) {
      window.firebase.initializeApp(firebaseConfig);
    }

    window.firebase
      .database()
      .ref('messages')
      .push(formData)
      .then(() => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(err => alert('Error: ' + err.message));
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" required />
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
