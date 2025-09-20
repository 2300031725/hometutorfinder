import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewEventsByTutor() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [tutorId, setTutorId] = useState(null);

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      const tutor = JSON.parse(storedTutor);
      setTutorId(tutor.id);
      fetchEvents(tutor.id);
    }
  }, []);

  const fetchEvents = async (tutorId) => {
    try {
      const response = await axios.get(`${config.url}/tutor/vieweventsbytutor/${tutorId}`);
      setEvents(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your events');
      setEvents([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Events</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {events.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No events added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Cost</th>
              <th>Tutor Name</th>
              <th>Tutor Email</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.category}</td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.capacity}</td>
                <td>{event.cost}</td>
                <td>{event.tutor?.name}</td>
                <td>{event.tutor?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
