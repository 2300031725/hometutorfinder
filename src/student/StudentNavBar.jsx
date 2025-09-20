import { Routes, Route, Link } from 'react-router-dom';
import './student.css';
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import StudentLogin from './StudentLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';
<<<<<<< HEAD
import BookedEvents from './BookedEvents';
import ViewAllEvents from './ViewAllEvents';
import BookEvent from './BookEvent';
=======
import BookedEvents from './BookedSessions';
import ViewAllEvents from './ViewAllSessions';
import BookEvent from './BookSession';
>>>>>>> f2f7496d84e70ec27f31383b7dcf13bdd5dc2b03

export default function StudentNavBar() 
{
  const { setIsStudentLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
    setIsStudentLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Student</div>
        <ul className="nav-links">
          <li><Link to="/studenthome">Home</Link></li>
          <li><Link to="/studentprofile">Student Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewallevents">Book a New Event</Link></li>
          <li><Link to="/bookedevents">Booked Events</Link></li>
          <li><Link to="/studentlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/studenthome" element={<StudentHome />} exact />
        <Route path="/studentprofile" element={<StudentProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/viewallevents" element={<ViewAllEvents/>} exact />
        <Route path="/bookevent" element={<BookEvent/>} />
        <Route path="/bookedevents" element={<BookedEvents/>} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
      </Routes>
    </div>
  );
}
