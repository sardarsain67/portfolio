import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <h3 className="form-title">Send me a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-4">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-item"><i className="bi bi-geo-alt-fill"></i>123 Street, City, Country</p>
              <p className="info-item"><i className="bi bi-envelope-fill"></i>info@example.com</p>
              <p className="info-item"><i className="bi bi-phone-fill"></i>+1234567890</p>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
       
    </section>
    
  );
};

export default Contact;
