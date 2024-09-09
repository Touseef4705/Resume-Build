// src/pages/Home.js

import React, { useState } from 'react';
import ResumePreview from '../Component/ResumePreview';
import TemplateSelector from '../Component/TemplateSelector';
import ResumeForm from '../Component/ResumeBuilder';
import DownloadButton from '../Component/DownloadButton';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
    });

    const [selectedTemplate, setSelectedTemplate] = useState('template1');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTemplateChange = (e) => {
        setSelectedTemplate(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
            {/* Form Section */}
            <div className="w-full md:w-1/3">
                <ResumeForm formData={formData} handleChange={handleChange} />
                <TemplateSelector
                    selectedTemplate={selectedTemplate}
                    handleTemplateChange={handleTemplateChange}
                />
                {/* Add the Download Button */}
                <DownloadButton formData={formData} />
            </div>

            {/* Preview Section */}
            <div className="w-full md:w-2/3">
                <ResumePreview formData={formData} selectedTemplate={selectedTemplate} />
            </div>
        </div>
    );
};

export default Home;
