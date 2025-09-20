import { useState, useEffect } from 'react';
import './StudentHome.css'; // Import the CSS file
<<<<<<< HEAD
=======
import img1 from './createaccount.png';
import img2 from './findyourtutor.png';
import img3 from './bookasession.png';
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03

export default function StudentHome() {
  const [student, setStudent] = useState("");

  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  return (
    <div className="student-home">
      <div className="welcome-container">
        <h3 className="welcome-message">Hello, {student.name}!</h3>
        <p className="welcome-text">Welcome to Home Tutor Finder. Find the best tutors to help you excel in your studies!</p>
      </div>
      <div className="features-section">
        <h2 className="section-title">How It Works</h2>
        <div className="features-cards">
          <div className="feature-card">
<<<<<<< HEAD
            <img src="https://source.unsplash.com/300x200/?student,account" alt="Create Account" className="feature-image" />
=======
            <img src={img1} alt="Create Account" className="feature-image" />
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
            <h4>Create an Account</h4>
            <p>Sign up as a student to access our platform of qualified tutors.</p>
          </div>
          <div className="feature-card">
<<<<<<< HEAD
            <img src="https://source.unsplash.com/300x200/?tutor,search" alt="Find Tutor" className="feature-image" />
=======
            <img src={img2} alt="Find Tutor" className="feature-image" />
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
            <h4>Find Your Tutor</h4>
            <p>Search through our database of tutors by subject, price, and availability.</p>
          </div>
          <div className="feature-card">
<<<<<<< HEAD
            <img src="https://source.unsplash.com/300x200/?calendar,schedule" alt="Book a Session" className="feature-image" />
            <h4>Book a Session</h4>
            <p>Schedule a session at a time that works for both you and your tutor.</p>
          </div>
          <div className="feature-card">
            <img src="https://source.unsplash.com/300x200/?success,learning" alt="Learn and Succeed" className="feature-image" />
            <h4>Learn and Succeed</h4>
            <p>Meet with your tutor online or in-person and achieve your academic goals.</p>
          </div>
=======
            <img src={img3} alt="Book a Session" className="feature-image" />
            <h4>Book a Session</h4>
            <p>Schedule a session at a time that works for both you and your tutor.</p>
          </div>
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
        </div>
      </div>
    </div>
  );
}