import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddSession() {
  const [formData, setFormData] = useState({
    subject: '',
    tutorname: '',
    description: '',
    duration: '',
    price: ''
  });

  const [tutor, setTutor] = useState(""); // Changed manager to tutor
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor'); // Changed manager to tutor
    if (storedTutor) {
      setTutor(JSON.parse(storedTutor));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
  
    const sessionData = {
      ...formData,
      tutor_id: tutor.id // Changed manager_id to tutor_id
    };

    try {
      const response = await axios.post(`${config.url}/tutor/addsession`, sessionData); // Changed manager to tutor
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          subject: '',
          tutorname: '',
          description: '',
          duration: '',
          price: ''
        });
      }
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add New Session</h3>
      {
        message ? 
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> : 
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject</label>
          <input type="text" id="category" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label>Tutorname</label>
          <input type="text" id="title" value={formData.tutorname} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" id="capacity" value={formData.duration} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" step="0.01" id="cost" value={formData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Session</button>
      </form>
    </div>
  );
}
