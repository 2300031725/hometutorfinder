import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css';

const ViewAllSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try 
    {
      const response = await axios.get(`${config.url}/subject/viewallsubjects`);
      setSubjects(response.data);
      setError('');
    } 
    catch (err) 
    {
      setError('Failed to fetch subjects. ' + err.message);
    }
  };

  return (
    <div className="product-table-container">
      <h3 className="product-heading">All Subjects</h3>

      <p style={{textAlign: "center",color:"green",fontWeight:"bolder"}}>{error}</p>

      <div className="table-responsive">
        <table className="product-table" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cost</th>
              <th>URL</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.id}</td>
                <td>{subject.name}</td>
                <td>{subject.category}</td>
                <td>{subject.description}</td>
                <td>₹{subject.cost}</td>
                <td>
                  <a href={subject.url} target="_new" rel="noopener noreferrer">
                    Visit
                  </a>
                </td>
                <td>
                  <img
                    src={`${config.url}/subject/displaysubjectimage?id=${subject.id}`}
                    alt="Subject"
                    className="table-image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllSubjects;
