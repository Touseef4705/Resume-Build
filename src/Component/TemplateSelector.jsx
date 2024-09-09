// src/components/TemplateSelector.js

import React from 'react';

const TemplateSelector = ({ selectedTemplate, handleTemplateChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select Resume Template</h2>
      <select
        value={selectedTemplate}
        onChange={handleTemplateChange}
        className="p-3 border border-gray-300 rounded-lg"
      >
        <option value="template1">Professional Template</option>
        <option value="template2">Creative Template</option>
        {/* Add more templates */}
      </select>
    </div>
  );
};

export default TemplateSelector;
