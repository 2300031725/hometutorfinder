<<<<<<< HEAD

import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './Contact.css';
=======
import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './style.css'; // Shared CSS styling
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
<<<<<<< HEAD
    location: ''
  });

  // message state variable
  const [message, setMessage] = useState('');
  // error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
=======
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/sendemail`, formData);
      setMessage(response.data);
      setError('');
<<<<<<< HEAD
      
      // Clear form fields after successful submission
=======

      // Clear the form
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
<<<<<<< HEAD
        location: ''
      });
    } catch (err) {
      // Handle error response
=======
        mobileno: '',
        location: ''
      });
    } catch (err) {
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
      setError('Failed to send email');
      setMessage('');
      console.error(err);
    }
  };

  return (
<<<<<<< HEAD
    <div className="contact-bg">
      <div className="contact-container">
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Contact Us</h3>
        {message ? (
          <p style={{ textAlign: 'center', color: 'green', fontWeight: 'bolder' }}>{message}</p>
        ) : (
          <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bolder' }}>{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
=======
    <div className="registration-container">
      <h2 className="form-title">Contact Us</h2>
      {message && <p className="form-message success">{message}</p>}
      {error && <p className="form-message error">{error}</p>}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input type="text" id="message" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="register-button">Submit</button>
      </form>
    </div>
  );
}
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
