import { Analyzer } from "./Analyzer";
import React, { useState } from 'react';
import { Box, Button, CssBaseline, Typography } from '@mui/material';


const bannerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    filter: "blur(2px)",
    filter: "sepia(100%) saturate(150%) hue-rotate(-20deg) brightness(0.2)"
}

export const Home = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            console.log(file)
            setSelectedPdf(file);
        } else {
            setSelectedPdf(null);
            alert('Please select a valid PDF file.');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <CssBaseline />
            {
                selectedPdf ? (
                    <Analyzer file={selectedPdf}/>
                ) : (
                    <>
                        <img style={bannerStyle} src="assets/banner.gif" alt="Full Screen Banner" class="full-screen-banner" />
                        <Box sx={{ marginTop: 10 }}>
                            <Typography variant="h3" sx={{ zIndex: 1 }}>BoilerSyllabi</Typography>
                            <br />
                            <img src='/assets/icon.svg' width={500}/>
                            <br />
                            <br />
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Upload PDF Syllabus
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </Button>
                        </Box>
                    </>
                )
            }
        </div>
    );
};
