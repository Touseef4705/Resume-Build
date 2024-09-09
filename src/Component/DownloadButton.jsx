// src/components/DownloadButton.js

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

const DownloadButton = ({ formData }) => {
  return (
    <div className="mt-6">
      <PDFDownloadLink
        document={<ResumePDF formData={formData} />}
        fileName="resume.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {({ loading }) => (loading ? 'Preparing document...' : 'Download Resume')}
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadButton;
