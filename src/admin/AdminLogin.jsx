import { useState } from 'react';
import './admin.css'; // Shared CSS file for consistent styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);

      if (response.status === 200) {
        setIsAdminLoggedIn(true);
        sessionStorage.setItem('admin', JSON.stringify(response.data));
        navigate('/adminhome');
      } else {
        setMessage(response.data);
        setError('');
      }
    } catch (err) {
      setMessage('');
      setError(err.response ? err.response.data : 'An unexpected error occurred.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Home Tutor</h2>
      <p className="login-subtitle">Enter your credentials to access your account</p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form">
        {message && <p className="form-message success">{message}</p>}
        {error && <p className="form-message error">{error}</p>}

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login as Admin</button>
      </form>

    </div>
  );
}