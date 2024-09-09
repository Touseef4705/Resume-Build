// src/components/ResumePreview.js

import React from 'react';

const ResumePreview = ({ formData, selectedTemplate }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Live Resume Preview</h2>

      {selectedTemplate === 'template1' && (
        <div className="template1 max-w-xl mx-auto p-6 bg-white shadow-lg border border-gray-200 rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            {formData.name || 'Your Name'}
          </h1>
          <p className="text-sm text-gray-500 mb-4">{formData.email || 'email@example.com'}</p>
          <p className="text-sm text-gray-500 mb-6">{formData.phone || '123-456-7890'}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Education</h3>
            <p className="text-gray-600">{formData.education || 'Your education details'}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Experience</h3>
            <p className="text-gray-600">{formData.experience || 'Your work experience'}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Skills</h3>
            <p className="text-gray-600">{formData.skills || 'Your skills (e.g. React, CSS, JavaScript)'}</p>
          </div>
        </div>

      )}

      {/* Add another template */}
      {selectedTemplate === 'template2' && (
        <div className="template2 bg-blue-50 p-4 border border-blue-300 rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600">{formData.name || 'Your Name'}</h1>
          <p>{formData.email || 'email@example.com'}</p>
          <p>{formData.phone || '123-456-7890'}</p>
          <h3 className="mt-4 text-lg font-semibold">Education</h3>
          <p>{formData.education || 'Your education details'}</p>
          <h3 className="mt-4 text-lg font-semibold">Experience</h3>
          <p>{formData.experience || 'Your work experience'}</p>
          <h3 className="mt-4 text-lg font-semibold">Skills</h3>
          <p>{formData.skills || 'Your skills (e.g. React, CSS, JavaScript)'}</p>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
