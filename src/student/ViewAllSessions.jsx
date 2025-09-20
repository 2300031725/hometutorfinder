import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './student.css'; // Include the custom CSS

export default function ViewAllSessions() {
  const [sessions, setSessions] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    tutor: '',
    experience: '',
    subject: '',
    tutorname: '',
    description: '',
    duration: '',
    price: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllSessions();
  }, []);

  const fetchAllSessions = async () => {
    try {
      const response = await fetch(`${config.url}/student/viewallsessions`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  const handleBookClick = (sessionId) => {
    const student = JSON.parse(sessionStorage.getItem("student"));
    if (!student || !student.id) {
      alert("Student not logged in");
      return;
    }

    navigate(`/booksession?sessionid=${sessionId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredSessions = sessions.filter(session => {
    return (
      session.id.toString().includes(searchTerms.id) &&
      session.tutor.name.toLowerCase().includes(searchTerms.tutor.toLowerCase()) &&
      session.tutor.experience.toLowerCase().includes(searchTerms.experience.toLowerCase()) &&
      session.subject.toLowerCase().includes(searchTerms.subject.toLowerCase()) &&
      session.tutorname.toLowerCase().includes(searchTerms.tutorname.toLowerCase()) &&
      session.description.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      session.duration.toString().includes(searchTerms.duration) &&
      session.price.toString().includes(searchTerms.price)
    );
  });

  return (
    <div className="session-container">
      <h3 className="session-heading">Available Sessions</h3>
      <table className="session-table">
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Expeience</th>
            <th>Location</th>
            <th>Subject</th>
            <th>Tutorname</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'id')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'tutor')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'experience')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'subject')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'tutorname')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'description')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'duration')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'price')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredSessions.length > 0 ? (
            filteredSessions.map(session => (
              <tr key={session.id}>
                <td>{session.id}</td>
                <td>{session.tutor.experience}</td>
                <td>{session.tutor.location}</td>
                <td>{session.subject}</td>
                <td>{session.tutorname}</td>
                <td>{session.description}</td>
                <td>{session.duration}</td>
                <td>{session.price}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(session.id)}>Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No matching sessions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
