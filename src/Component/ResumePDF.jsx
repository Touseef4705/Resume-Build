// src/components/ResumePDF.js

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define the styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create a PDF Document Component
const ResumePDF = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      {/* Name and Contact Info */}
      <View style={styles.section}>
        <Text style={styles.header}>{formData.name || 'Your Name'}</Text>
        <Text>{formData.email || 'email@example.com'}</Text>
        <Text>{formData.phone || '123-456-7890'}</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Education</Text>
        <Text style={styles.text}>{formData.education || 'Your education details'}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Experience</Text>
        <Text style={styles.text}>{formData.experience || 'Your work experience'}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Skills</Text>
        <Text style={styles.text}>{formData.skills || 'Your skills (e.g. React, JavaScript)'}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
