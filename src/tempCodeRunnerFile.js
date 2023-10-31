import "./App.css";

import React, { useState } from "react";

const NewShopForm = () => {
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogo(null);
    setName("");
    setDescription("");
    alert("Form submitted!"); // Add an alert here
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  return (
    <div className="form-container">
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <div className="center">
          <label htmlFor="logo">Upload Logo</label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            onChange={handleLogoUpload}
          />
        </div>
        <div className="center">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="center">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="center">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewShopForm;