import { Analyzer } from "./Analyzer";
import { tempData } from "../static/temp";
import React, { useState } from 'react';
import { Button } from '@mui/material';

export const Home = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedPdf(file);
    } else {
      setSelectedPdf(null);
      alert('Please select a valid PDF file.');
    }
  };

  const handleUpload = () => {
    if (selectedPdf) {
      console.log('Uploading PDF:', selectedPdf);
    } else {
      alert('Please select a PDF file first.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <br /><br />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleUpload} 
        disabled={!selectedPdf}
      >
        Upload PDF
      </Button>
      {selectedPdf && <p>Selected PDF: {selectedPdf.name}</p>}
    </div>
  );
};
