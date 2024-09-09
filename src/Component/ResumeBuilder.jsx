// src/components/ResumeForm.js

import React, { useState } from 'react';
import SkillInput from './SkillsInput';
const ResumeForm = ({ formData, handleChange }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Build Your Resume</h2>

      {/* Personal Information */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Education */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Education</label>
        <textarea
          name="education"
          placeholder="Enter your education details"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Work Experience</label>
        <textarea
          name="experience"
          placeholder="Enter your work experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>
      </div>

      {/* Skills */}
      <SkillInput formData={formData} handleChange={handleChange} />

      {/* More fields like projects, certifications, etc. */}
    </div>
  );
};

export default ResumeForm;
