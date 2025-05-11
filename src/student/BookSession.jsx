import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config';

export default function BookSession() 
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('sessionid');

  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    startdate: '',
    enddate: '',
    bookedduration: 1
  });

  useEffect(() => {
    const storedStudent = sessionStorage.getItem("student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    } else {
      alert("Student not logged in!");
      navigate('/studentlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      session: { id: sessionId },
      student: { id: student.id },
      ...formData,
      status: 1
    };

    try {
      const response = await fetch(`${config.url}/student/booksession`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        alert("Session booked successfully!");
        navigate('/bookedsessions');
      } else {
        alert("Failed to book session.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Book Session</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div>
          <label>Start Date: </label>
          <input type="date" name="startdate" value={formData.startdate} onChange={handleChange} required />
        </div>
        <div>
          <label>End Date: </label>
          <input type="date" name="enddate" value={formData.enddate} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration: </label>
          <input type="number" name="bookedduration" min="1" value={formData.bookedduration} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}
