import React, { useState } from 'react';
import './contact.css';
import { sendEmail } from '../../utils/emailjs';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const result = await sendEmail({
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (result.success) {
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } else {
      setStatus({ loading: false, success: false, error: result.message });
    }
  };

  return (
    <section className="contact-form-section animate-fade-in">
      <form onSubmit={handleSubmit} className="contact-form-grid">
        
        {/* Name Row */}
        <div className="contact-form-row">
          <div className="contact-form-label-col">
            <label htmlFor="name">Name</label>
          </div>
          <div className="contact-form-input-col">
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              required
              placeholder="e.g. Rohan Patel"
            />
          </div>
        </div>

        {/* Email Row */}
        <div className="contact-form-row">
          <div className="contact-form-label-col">
            <label htmlFor="email">Email</label>
          </div>
          <div className="contact-form-input-col">
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
              placeholder="rohan@example.com"
            />
          </div>
        </div>

        {/* Message Row */}
        <div className="contact-form-row message-row">
          <div className="contact-form-label-col">
            <label htmlFor="message">Message</label>
          </div>
          <div className="contact-form-input-col">
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Describe your project, ideas, or questions..."
            />
          </div>
        </div>

        {/* Status Messages */}
        {status.success && (
          <div className="contact-form-status success">
            <Check size={18} className="status-icon" />
            <span>Thank you! Your message has been sent successfully.</span>
          </div>
        )}
        {status.error && (
          <div className="contact-form-status error">
            <span>{status.error}</span>
          </div>
        )}

        {/* Submit Button Row */}
        <div className="contact-form-submit-row">
          <button 
            type="submit" 
            className={`contact-submit-btn ${status.loading ? 'loading' : ''} ${status.success ? 'success' : ''}`}
            disabled={status.loading || status.success}
          >
            <span className="btn-content">
              {status.loading ? (
                <>
                  <Loader2 className="spinner" size={20} />
                  <span>sending...</span>
                </>
              ) : status.success ? (
                <>
                  <Check size={20} />
                  <span>sent!</span>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <ArrowRight className="arrow" size={20} />
                </>
              )}
            </span>
          </button>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
