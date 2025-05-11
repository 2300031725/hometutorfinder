import './style.css';
import heroImage from './homepageimage.png'; // Replace with your image path

export default function Home() {
  return (
    <div className="home-hero-container">
      <div className="hero-content">
        <span className="hero-tag">Find Your Perfect Match</span>
        <h1 className="hero-title">Connect with Expert Tutors for Personalized Learning</h1>
        <p className="hero-subtitle">
          SmartTutor matches students with qualified tutors for online or in-person sessions. 
          Boost your academic performance with personalized instruction.
        </p>

      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Tutoring session" />
      </div>
    </div>
  );
}
