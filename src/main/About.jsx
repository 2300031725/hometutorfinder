import './style.css';
<<<<<<< HEAD
import './About.css';

export default function About() {
  return (
    <div>
      <div className="about-container">
        <h1>About SmartTutor</h1>
        <p>
          SmartTutor is an easy-to-use platform that connects students with qualified tutors
          for personalized, one-on-one learning sessions. Whether you need help with school subjects,
          exam preparation, or specific skills, our network of expert tutors is here to support your academic journey.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to make quality education accessible to everyone by bringing together students and passionate
          educators through a user-friendly digital platform.
        </p>

        <h2>Why Choose Us?</h2>
        <div className="why-choose-us">
          <div className="card">
            <div className="card-icon">
              <img src="https://img.icons8.com/emoji/48/graduation-cap-emoji.png" alt="Educational Excellence" />
            </div>
            <h3>Educational Excellence</h3>
            <p>
              We vet all our tutors carefully to ensure they have the knowledge, skills, and teaching ability
              to help students succeed.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              {/* Handshake SVG icon for better visibility */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#e0e7ff"/>
                <path d="M14 28l6 6c1.5 1.5 4 1.5 5.5 0l6-6" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 20l10 10 10-10" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Meaningful Connections</h3>
            <p>
              We don&apos;t just match based on subject—we consider learning styles, goals, and personalities
              to foster productive relationships.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src="https://img.icons8.com/emoji/48/globe-showing-americas-emoji.png" alt="Accessibility" />
            </div>
            <h3>Accessibility</h3>
            <p>
              We strive to make quality tutoring accessible to all students, regardless of location or background.
            </p>
          </div>
        </div>
      </div>
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SmartTutor</h3>
            <p>Connecting students with qualified tutors for personalized learning experiences.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/studentregistration">Find Tutors</a></li>
              <li><a href="/about">How It Works</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>For Tutors</h3>
            <ul>
              <li><a href="/tutorregistration">Apply as a Tutor</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 SmartTutor Match. All rights reserved.</span>
          <span className="footer-social">
            <a href="#" aria-label="Facebook" style={{marginRight: '12px'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0" fill="#64748b"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" style={{marginRight: '12px'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="#64748b"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.118 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" fill="#64748b"/>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
=======

export default function About() {
  return (
    <div className="about-container">
      <h1>About SmartTutor</h1>
      <p>
        SmartTutor is an easy-to-use platform that connects students with qualified tutors
        for personalized, one-on-one learning sessions. Whether you need help with school subjects,
        exam preparation, or specific skills, our network of expert tutors is here to support your academic journey.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to make quality education accessible to everyone by bringing together students and passionate
        educators through a user-friendly digital platform.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Experienced and verified tutors</li>
        <li>Flexible online and in-person options</li>
        <li>Secure booking and communication</li>
        <li>Affordable and transparent pricing</li>
      </ul>
    </div>
  );
}
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
