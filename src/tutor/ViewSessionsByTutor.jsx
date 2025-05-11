import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewSessionsByTutor() {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState('');
  const [tutorId, setTutorId] = useState(null);

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      const tutor = JSON.parse(storedTutor);
      setTutorId(tutor.id);
      fetchSessions(tutor.id);
    }
  }, []);

  const fetchSessions = async (tutorId) => {
    try {
      const response = await axios.get(`${config.url}/tutor/viewsessionsbytutor/${tutorId}`);
      setSessions(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your sessions');
      setSessions([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Sessions</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {sessions.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No sessions added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Session ID</th>
              <th>Subject</th>
              <th>Tutorname</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Tutor Name</th>
              <th>Tutor Email</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td>{session.id}</td>
                <td>{session.subject}</td>
                <td>{session.tutor}</td>
                <td>{session.description}</td>
                <td>{session.duration}</td>
                <td>{session.price}</td>
                <td>{session.tutor?.name}</td>
                <td>{session.tutor?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
