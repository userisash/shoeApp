// ShoeForm.js

import React, { useState } from 'react';

function CreateForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img: '',
  });

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      price: '',
      img: '',
    });
  }

  function handleFormCancel() {
    setFormData({
      name: '',
      price: '',
      img: '',
    });
    onCancel();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleFormChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleFormChange}
        />
      </label>
      <br />
      <button type="submit">Add Shoe</button>
      <button type="button" onClick={handleFormCancel}>
        Cancel
      </button>
    </form>
  );
}

export default CreateForm;
