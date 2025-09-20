import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    capacity: '',
    cost: ''
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
  
    const eventData = {
      ...formData,
      tutor_id: tutor.id // Changed manager_id to tutor_id
    };

    try {
      const response = await axios.post(`${config.url}/tutor/addevent`, eventData); // Changed manager to tutor
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          category: '',
          title: '',
          description: '',
          capacity: '',
          cost: ''
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
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add New Event</h3>
      {
        message ? 
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> : 
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <input type="text" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Capacity</label>
          <input type="number" id="capacity" value={formData.capacity} onChange={handleChange} required />
        </div>
        <div>
          <label>Cost</label>
          <input type="number" step="0.01" id="cost" value={formData.cost} onChange={handleChange} required />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
