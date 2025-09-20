import { useState } from 'react';
import './StudentLogin.css'; // Updated CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsStudentLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/student/checkstudentlogin`, formData);

      if (response.status === 200) {
        setIsStudentLoggedIn(true);
        sessionStorage.setItem('student', JSON.stringify(response.data));
        navigate('/studenthome');
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
<<<<<<< HEAD
      <h2 className="login-title">Login to SmartTutor</h2>
=======
      <h2 className="login-title">Login to Home Tutor</h2>
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
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
<<<<<<< HEAD
            placeholder="Enter your Username"
=======
            placeholder="Enter your username"
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
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
<<<<<<< HEAD
        <div className="form-footer">
          <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
        </div>
        <button type="submit" className="login-button">Login as Student</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <a href="/studentregistration" className="signup-link">Sign up</a>
      </p>
      <p className="terms-text">
        By logging in, you agree to our <a href="/terms" className="terms-link">Terms of Service</a> and <a href="/privacy" className="privacy-link">Privacy Policy</a>.
      </p>
=======
        <button type="submit" className="login-button">Login as Student</button>
      </form>
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
    </div>
  );
}