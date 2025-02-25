import React, { useState } from 'react';
import { Box, Button, CssBaseline, Typography } from '@mui/material';
import { Analyzer } from '../components/Analyzer';


const bannerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    filter: "blur(2px) sepia(100%) saturate(180%) hue-rotate(-20deg) brightness(0.2)"
}

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

    return (
        <div>
            <CssBaseline />
            {
                selectedPdf ? (
                    <Analyzer file={selectedPdf} />
                ) : (
                    <>
                        <img style={bannerStyle} src="assets/banner.gif" alt="Full Screen Banner"/>
                        <Box sx={{ margin: 10, marginTop: "12vh" }}>
                            <Typography variant="h2" sx={{ zIndex: 1, textAlign: "center", fontFamily: "Bebas Neue" }}>BoilerSyllabi</Typography>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src='/assets/icon.svg' width={500} />
                                <div>
                                    <Typography>An AI-powered platform designed to help you take control of your academic journey by simplifying your course syllabi. Say goodbye to scrolling through lengthy syllabi and hello to a more organized, stress-free way of managing your courses. Start exploring and streamline your semester with ease!</Typography>
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
                                </div>
                            </div>

                        </Box>
                    </>
                )
            }
        </div>
    );
};
