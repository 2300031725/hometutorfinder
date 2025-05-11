import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'

const AddSubject = () => 
{
  const [subject, setSubject] = useState({
    category: '',
    name: '',
    description: '',
    cost: '',
    url: ''
  });
  const [subjectImage, setSubjectImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSubjectImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subjectimage', subjectImage);
    formData.append('category', subject.category);
    formData.append('name', subject.name);
    formData.append('description', subject.description);
    formData.append('cost', subject.cost);
    formData.append('url', subject.url);

    try 
    {
      const response = await axios.post(`${config.url}/subject/addsubject`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
      setError("")

      // Clear form fields
      setSubject({
        category: '',
        name: '',
        description: '',
        cost: '',
        url: ''
      });
      setSubjectImage(null);

    } 
    catch (error) 
    {
      console.log(error.message)
      setMessage("")
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
       <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add Subject</h3>
      {
        message ?
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> :
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Category:</label>
          <select className="form-control" name="category" onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description:</label>
          <textarea className="form-control" name="description" rows="3" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Cost:</label>
          <input type="number" step="0.01" className="form-control" name="cost" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>URL:</label>
          <input type="text" className="form-control" name="url" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Subject Image:</label>
          <input type="file" className="form-control" onChange={handleImageChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Subject</button>
      </form>
    </div>
  );
};

export default AddSubject;
