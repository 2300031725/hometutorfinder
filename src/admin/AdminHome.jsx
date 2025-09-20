import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [studentCount, setStudentCount] = useState(0);
  const [tutorCount, setTutorCount] = useState(0);
<<<<<<< HEAD
  const [eventCount, setEventCount] = useState(0);
=======
  const [sessionCount, setSessionCount] = useState(0);
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const studentRes = await axios.get(`${config.url}/admin/studentcount`);
        const tutorRes = await axios.get(`${config.url}/admin/tutorcount`);
<<<<<<< HEAD
        const eventRes = await axios.get(`${config.url}/admin/eventcount`);

        setStudentCount(studentRes.data);
        setTutorCount(tutorRes.data);
        setEventCount(eventRes.data);
=======
        const sessionRes = await axios.get(`${config.url}/admin/sessioncount`);

        setStudentCount(studentRes.data);
        setTutorCount(tutorRes.data);
        setSessionCount(sessionRes.data);
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Students</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#007bff' }}>{studentCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Tutors</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{tutorCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
<<<<<<< HEAD
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Events</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{eventCount}</p>
=======
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Sessions</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{sessionCount}</p>
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
