import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import StudentLogin from './../student/StudentLogin';
import StudentRegistration from './../student/StudentRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import TutorLogin from '../tutor/TutorLogin';
import NotFound from './NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher, faUserShield } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
=======
import logo from './logo.png'; // Replace with your image path
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03


export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar">
<<<<<<< HEAD
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/logo.png" // 🔁 Replace with your image path
            alt="Logo"
            className="logo-image"
            style={{ height: '40px', width: '40px', objectFit: 'contain' }}
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.4rem', letterSpacing: '1px' }}>Home Tutor Finder</span>
=======
      <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          Home Tutor Finder
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/studentregistration">Register</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
  <li>
    <Link to="/studentlogin">
      <FontAwesomeIcon icon={faUserGraduate} style={{ marginRight: '8px' }} />
      Student
    </Link>
  </li>
  <li>
    <Link to="/tutorlogin">
      <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '8px' }} />
      Tutor
    </Link>
  </li>
  <li>
    <Link to="/adminlogin">
      <FontAwesomeIcon icon={faUserShield} style={{ marginRight: '8px' }} />
      Admin
    </Link>
  </li>
</ul>

          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/studentregistration" element={<StudentRegistration />} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/tutorlogin" element={<TutorLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}