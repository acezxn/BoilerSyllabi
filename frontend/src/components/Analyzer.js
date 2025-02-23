import { CssBaseline, Typography } from '@mui/material';
import { ContactInfo } from './info_cards/ContactInfo';
import { Overview } from './info_cards/Overview';
import { Schedule } from './info_cards/Schedule';
import { ImportantEvents } from './info_cards/ImportantEvents';
import { Grading } from './info_cards/Grading';
import { useEffect, useState } from 'react';
import { GradedItems } from './info_cards/GradedItems';
import { Policies } from './info_cards/Policies';
import { TextbookResources } from './info_cards/TextbookResources';
import ClockLoader from "react-spinners/ClockLoader";
import { theme } from '../themes/theme';
import { RateMyProfessor } from './info_cards/RateMyProfessor';
import { Helmet } from "react-helmet";

const dashboardStyle = {
    margin: 10,
    marginBottom: 0,
    display: "grid",
    width: "calc(100vw - 20px)",
    gap: 10,
    gridTemplateColumns: "auto auto auto"
}

export const Analyzer = ({ file }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [professor, setProfessor] = useState("");
    const [loadingState, setLoadingState] = useState("");
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfAnalysisData, setPdfAnalysisData] = useState(null);
    const [profAnalysisData, setProfAnalysisData] = useState(null);

    const analyzeFile = async () => {
        console.log("Analyzing PDF")
        let requestData = new FormData();
        requestData.append('file', selectedPdf);
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/analyze_pdf",
            {
                method: "POST",
                body: requestData,
                signal: AbortSignal.timeout(600000)
            }
        );
        const jsonResponse = await response.json();
        setPdfAnalysisData(jsonResponse.data);
        setProfessor(jsonResponse.data.overview.professor);
    }

    const analyzeProfessor = async () => {
        console.log("Analyzing Professor")
        let requestData = new FormData();
        requestData.append('professor', professor);
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/get_ratemyprof_info",
            {
                method: "POST",
                body: requestData,
                signal: AbortSignal.timeout(600000)
            }
        );
        const jsonResponse = await response.json();
        setProfAnalysisData(jsonResponse.data);
    }

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        if (professor !== "") {
            if (professor.match(/[Gg]ustavo/)) {
                window.open("http://data.cs.purdue.edu:3000/main", "_blank", "noopener,noreferrer");
            }
            else if (professor.match(/[Tt]urkstra/)) {
                window.open("https://turkeyland.net/album/04262023/images/IMG20230426102708.jpg", "_blank", "noopener,noreferrer");
            }
            setLoadingState("Analyzing Professor");
            analyzeProfessor();
        }
    }, [professor]);

    useEffect(() => {
        if (selectedPdf) {
            setLoadingState("Analyzing PDF");
            analyzeFile();
        }
    }, [selectedPdf]);

    useEffect(() => {
        if (file) {
            setSelectedPdf(file);
        }
    }, [file]);

    return (
        <>
            <CssBaseline />
            {
                (pdfAnalysisData && profAnalysisData) ? (
                    <div style={dashboardStyle}>
                        <Helmet>
                            <title>{professor}</title>
                        </Helmet>
                        {
                            width > 1200 ? (
                                <>
                                    <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                        <Overview data={pdfAnalysisData.overview} />
                                        <ContactInfo data={pdfAnalysisData.contact} />
                                        <Policies data={pdfAnalysisData.policies} />
                                    </div>
                                    <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                        <Schedule data={pdfAnalysisData.schedule} />
                                        <ImportantEvents data={pdfAnalysisData.important_events} />
                                        <TextbookResources data={pdfAnalysisData.textbook_resources} />
                                    </div>
                                    <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                        <RateMyProfessor data={profAnalysisData} />
                                        <Grading data={pdfAnalysisData.grading} />
                                        <GradedItems data={pdfAnalysisData.graded_items} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {
                                        width > 800 ? (
                                            <>
                                                <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                    <Overview data={pdfAnalysisData.overview} />
                                                    <ContactInfo data={pdfAnalysisData.contact} />
                                                    <Policies data={pdfAnalysisData.policies} />
                                                    <TextbookResources data={pdfAnalysisData.textbook_resources} />
                                                </div>
                                                <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                    <Schedule data={pdfAnalysisData.schedule} />
                                                    <ImportantEvents data={pdfAnalysisData.important_events} />
                                                    <Grading data={pdfAnalysisData.grading} />
                                                    <GradedItems data={pdfAnalysisData.graded_items} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div style={{ minWidth: "calc(100vw - 20)" }}>
                                                    <Overview data={pdfAnalysisData.overview} />
                                                    <Schedule data={pdfAnalysisData.schedule} />
                                                    <ContactInfo data={pdfAnalysisData.contact} />
                                                    <ImportantEvents data={pdfAnalysisData.important_events} />
                                                    <Grading data={pdfAnalysisData.grading} />
                                                    <GradedItems data={pdfAnalysisData.graded_items} />
                                                    <Policies data={pdfAnalysisData.policies} />
                                                    <TextbookResources data={pdfAnalysisData.textbook_resources} />
                                                </div>
                                            </>
                                        )
                                    }

                                </>
                            )
                        }
                    </div>
                ) : (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}>
                        <Typography sx={{ margin: 2, fontStyle: "italic" }}>{loadingState}</Typography>
                        <ClockLoader size={150} color={theme.palette.text.primary} />
                    </div>
                )
            }
        </>
    )
}