// src/components/SkillInput.js

import React from 'react';

const SkillInput = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Skills</label>
      <textarea
        name="skills"
        placeholder="Enter your skills (e.g. React, JavaScript, CSS)"
        value={formData.skills}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg"
      ></textarea>
    </div>
  );
};

export default SkillInput;
