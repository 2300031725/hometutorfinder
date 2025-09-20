import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddTutor from './AddTutor';
import ViewTutors from './ViewTutors';
import ViewStudents from './ViewStudents';
import AdminLogin from './AdminLogin';
import AddSubject from './AddSubject';
import DisplaySubjects from './DisplaySubjects';
import ViewAllSubjects from './ViewAllSubjects';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/addeventtutor">Add Event Tutors</Link></li>
          <li><Link to="/viewtutors">View Event Tutors</Link></li>
          <li><Link to="/viewallstudents">View All Students</Link></li>

          <li className="dropdown">
            <span>Subject▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/addsubject">Add</Link></li>
              <li><Link to="/viewallsubjects">View All</Link></li>
              <li><Link to="/displaysubjects">Display</Link></li>
            </ul>
          </li>

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/addeventtutor" element={<AddTutor />} exact />
        <Route path="/viewtutors" element={<ViewTutors />} exact />
        <Route path="/viewallstudents" element={<ViewStudents />} exact />

        <Route path="/addsubject" element={<AddSubject />} exact />
        <Route path="/viewallsubjects" element={<ViewAllSubjects />} exact />
        <Route path="/displaysubjects" element={<DisplaySubjects />} exact />

        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}