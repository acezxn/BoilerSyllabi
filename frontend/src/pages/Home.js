import { Analyzer } from "./Analyzer";
import React, { useState } from 'react';
import { Box, Button, CssBaseline, Typography } from '@mui/material';
<<<<<<< HEAD
import { MdOutlineDocumentScanner } from "react-icons/md";
=======
>>>>>>> 1d7c7b41b958db427e383a68639f4803b20a27ff


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
            setSelectedPdf(file);
        } else {
            setSelectedPdf(null);
            alert('Please select a valid PDF file.');
        }
    };

    return (
<<<<<<< HEAD
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
                            {/* <MdOutlineDocumentScanner size={300} /> */}
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
=======
        <div>
            <CssBaseline />
            {
                selectedPdf ? (
                    <Analyzer file={selectedPdf} />
                ) : (
                    <>
                        <img style={bannerStyle} src="assets/banner.gif" alt="Full Screen Banner" class="full-screen-banner" />
                        <Box sx={{ margin: 2, marginTop: 10 }}>
                            <Typography variant="h3" sx={{ zIndex: 1, textAlign: "center" }}>BoilerSyllabi</Typography>
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

>>>>>>> 1d7c7b41b958db427e383a68639f4803b20a27ff
                        </Box>
                    </>
                )
            }
        </div>
    );
};
