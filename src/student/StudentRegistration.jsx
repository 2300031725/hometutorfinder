import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './student.css';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
  username: '',
  password: '',
  mobileno: '',
  location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/student/registration`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: ''
        });
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : 'An unexpected error occurred.');
    }
  };

  return (
    <div className="registration-container">
      <h2 className="form-title">Student Registration</h2>
      {message && <p className="form-message success">{message}</p>}
      {error && <p className="form-message error">{error}</p>}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}
