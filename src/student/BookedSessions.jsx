import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function BookedSessions() {
  const [bookedSessions, setBookedSessions] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchBookedSessions = async () => {
      const storedStudent = sessionStorage.getItem('student');
      if (storedStudent) {
        const studentData = JSON.parse(storedStudent);
        setStudent(studentData);
        try {
          const response = await axios.get(`${config.url}/student/bookedsessions/${studentData.id}`);
          setBookedSessions(response.data);
        } catch (error) {
          console.error('Error fetching booked sessions:', error);
        }
      } else {
        alert('Please log in to view your booked sessions.');
      }
    };

    fetchBookedSessions();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Booked Sessions</h3>
      {student ? (
        <div>
          <table style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th>Booking ID</th>
                <th>Session Subject</th>
                <th>Session Tutorname</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Booked Duration</th>
                <th>Status</th>
                <th>Booking Time</th>
              </tr>
            </thead>
            <tbody>
              {
                bookedSessions.length > 0 ? bookedSessions.map((session, index) => (
                  <tr key={index}>
                    <td>{session.id}</td>
                    <td>{session.session.subject}</td>
                    <td>{session.session.tutorname}</td>
                    <td>{session.startdate}</td>
                    <td>{session.enddate}</td>
                    <td>{session.bookedduration}</td>
                    <td>{session.status}</td>
                    <td>{new Date(session.bookingtime).toLocaleString()}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="8">No booked sessions found.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading your student details...</p>
      )}
    </div>
  );
}