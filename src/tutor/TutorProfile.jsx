import { useState, useEffect } from 'react';

export default function TutorProfile() {
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      setTutor(JSON.parse(storedTutor));
    }
  }, []);

  if (!tutor) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Tutor Profile
      </h2>

      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {tutor.name}</p>
        <p><strong>Gender:</strong> {tutor.gender}</p>
        <p><strong>Date of Birth:</strong> {tutor.dob}</p>
        <p><strong>Email:</strong> {tutor.email}</p>
        <p><strong>Username:</strong> {tutor.username}</p>
        <p><strong>Mobile No:</strong> {tutor.mobileno}</p>
        <p><strong>Company Name:</strong> {tutor.company_name}</p>
        <p><strong>Company Location:</strong> {tutor.company_location}</p>
      </div>
    </div>
  );
}
