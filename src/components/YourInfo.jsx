import React from "react";
import "../styles/yourinfo.css";

const Personaldetails = ({ formData, setFormData }) => {
  return (
    <div className="personal-details__container">
      <label>Name</label>
      <input
        type="text"
        required
        placeholder="e.g. Stephen King"
        value={formData.fullName}
        onChange={(e) => {
          setFormData({ ...formData, fullName: e.target.value });
        }}
      />
      <label>Email Address</label>
      <input
        type="email"
        required
        placeholder="e.g. stephenking@lorem.com"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <label>Phone Number</label>
      <input
        type="number"
        required
        placeholder="e.g. +1 234 567 8900"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
    </div>
  );
};

export default Personaldetails;
