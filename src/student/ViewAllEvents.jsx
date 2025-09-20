import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './student.css'; // Include the custom CSS

export default function ViewAllEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    tutor: '',
    company: '',
    category: '',
    title: '',
    description: '',
    capacity: '',
    cost: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(`${config.url}/student/viewallevents`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleBookClick = (eventId) => {
    const student = JSON.parse(sessionStorage.getItem("student"));
    if (!student || !student.id) {
      alert("Student not logged in");
      return;
    }

    navigate(`/bookevent?eventid=${eventId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredEvents = events.filter(event => {
    return (
      event.id.toString().includes(searchTerms.id) &&
      event.tutor.name.toLowerCase().includes(searchTerms.tutor.toLowerCase()) &&
      event.tutor.company_name.toLowerCase().includes(searchTerms.company.toLowerCase()) &&
      event.category.toLowerCase().includes(searchTerms.category.toLowerCase()) &&
      event.title.toLowerCase().includes(searchTerms.title.toLowerCase()) &&
      event.description.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      event.capacity.toString().includes(searchTerms.capacity) &&
      event.cost.toString().includes(searchTerms.cost)
    );
  });

  return (
    <div className="event-container">
      <h3 className="event-heading">Available Events</h3>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Company Name</th>
            <th>Company Location</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'id')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'tutor')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'company')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'category')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'title')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'description')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'capacity')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'cost')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.tutor.company_name}</td>
                <td>{event.tutor.company_location}</td>
                <td>{event.category}</td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.capacity}</td>
                <td>{event.cost}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(event.id)}>Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No matching events found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
