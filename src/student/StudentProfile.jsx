import { useState, useEffect } from 'react';

export default function StudentProfile() 
{
  const [student, setStudent] = useState("");
     
  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
     setStudent(JSON.parse(storedStudent));
    }
  }, []);

  if (!student) {
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
        Student Profile
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
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Username:</strong> {student.username}</p>
        <p><strong>Mobile No:</strong> {student.mobileno}</p>
        <p><strong>Location:</strong> {student.location}</p>
      </div>
    </div>
  );
}