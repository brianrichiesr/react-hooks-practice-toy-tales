import React, { useState } from "react";

function ToyForm({ addToyToList }) {
  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
    "likes": 0
  })
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (key.trim()) {
      setFormData({
        ...formData,
        [key]: value
      })
    } else {
      return alert(`Please enter a proper ${key}`)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addToyToList(formData);
    e.target.reset();
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
