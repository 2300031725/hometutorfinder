import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const DisplaySubjects = () => 
{
  const [subjects, setSubjects] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [subjectDetails, setSubjectDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllSubjects();
  }, []);

  const fetchAllSubjects = async () => {
    try {
      const response = await axios.get(`${config.url}/subject/viewallsubjects`);
      setSubjects(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch subjects: ' + err.message);
    }
  };

  const fetchSubjectById = async (id) => {
    try {
      const response = await axios.post(`${config.url}/subject/displaysubjectbyid?sid=${id}`);
      setSubjectDetails(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching subject: ' + err.message);
    }
  };

  const handleSelection = (e) => 
  {
    const id = e.target.value;
    setSelectedId(id);
    if (id) 
    {
      fetchSubjectById(id);
    } 
    else 
    {
      setSubjectDetails(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Display Subject Details</h3>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="form-group mb-3">
        <label><strong>Select a Subject:</strong></label>
        <select className="form-control" value={selectedId} onChange={handleSelection}>
          <option value="">-- Select Subject --</option>
          {subjects.map(subject => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {subjectDetails && (
        <div className="card mt-3">
          <img
            src={`${config.url}/subject/displaysubjectimage?id=${subjectDetails.id}`}
            className="card-img-top"
            alt="Subject"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{subjectDetails.name}</h5>
            <p className="card-text">
              <strong>Category:</strong> {subjectDetails.category}<br />
              <strong>Description:</strong> {subjectDetails.description}<br />
              <strong>Cost:</strong> ₹{subjectDetails.cost}<br />
              <strong>URL:</strong> <a href={subjectDetails.url} target="_blank" rel="noopener noreferrer">Visit</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplaySubjects;
