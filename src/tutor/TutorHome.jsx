import { useState, useEffect } from 'react';

import './TutorHome.css'; // Import the CSS file
import img1 from './applyasatutor.png';
import img2 from './completeyourprofile.png';
import img3 from './matchedwithstudents.png';
import img4 from './teachandearn.png';



export default function TutorHome() {

  const [tutor, setTutor] = useState("");



  useEffect(() => {

    const storedTutor = sessionStorage.getItem('tutor');

    if (storedTutor) {

      setTutor(JSON.parse(storedTutor));

    }

  }, []);



  return (

    <div className="tutor-home">

      <div className="welcome-container">

        <h3 className="welcome-message">Hello, {tutor.name}!</h3>

        <p className="welcome-text">Welcome to Home Tutor Finder. Share your knowledge and help students achieve their goals!</p>

      </div>

      <div className="features-section">

        <h2 className="section-title">For Tutors</h2>

        <div className="features-cards">

          <div className="feature-card">

            <img src={img1} alt="Apply as a Tutor" className="feature-image" />

            <h4>Apply as a Tutor</h4>

            <p>Create an account and submit your qualifications for review.</p>

          </div>

          <div className="feature-card">

            <img src={img2} alt="Complete Your Profile" className="feature-image" />

            <h4>Complete Your Profile</h4>

            <p>Add your subjects, experience, availability, and set your hourly rate.</p>

          </div>

          <div className="feature-card">

            <img src={img3} alt="Get Matched with Students" className="feature-image" />

            <h4>Get Matched with Students</h4>

            <p>Once approved, students can find you and request tutoring sessions.</p>

          </div>

          <div className="feature-card">

            <img src={img4} alt="Teach and Earn" className="feature-image" />

            <h4>Teach and Earn</h4>

            <p>Provide quality instruction and build your reputation on the platform.</p>

          </div>

        </div>

        <button className="cta-button">Apply to Become a Tutor</button>

      </div>

    </div>

  );

}