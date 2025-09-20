import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './tutor.css';
import TutorHome from './TutorHome';
import TutorProfile from './TutorProfile';
import TutorLogin from './TutorLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddEvent from './AddEvent';
import ViewEventsByTutor from './ViewEventsByTutor';
import ViewBookings from './ViewBookings';

export default function TutorNavBar() 
{
  const { setIsTutorLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsTutorLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Tutor</div>
        <ul className="nav-links">
          <li><Link to="/tutorhome">Home</Link></li>
          <li><Link to="/tutorprofile">Tutor Profile</Link></li>
          <li><Link to="/addevent">Add New Event</Link></li>
          <li><Link to="/vieweventsbytutor">View Events</Link></li>
          <li><Link to="/viewbookings">View Bookings</Link></li>
          <li><Link to="/tutorlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tutorhome" element={<TutorHome />} exact />
        <Route path="/tutorprofile" element={<TutorProfile />} exact />
        <Route path="/addevent" element={<AddEvent />} exact />
        <Route path="/vieweventsbytutor" element={<ViewEventsByTutor />} exact />
        <Route path="/viewbookings" element={<ViewBookings />} exact />
        <Route path="/tutorlogin" element={<TutorLogin />} exact />
      </Routes>
    </div>
  );
}