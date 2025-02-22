import { CssBaseline, Typography } from '@mui/material';
import { ContactInfo } from '../components/info_cards/ContactInfo';
import { Overview } from '../components/info_cards/Overview';
import { Schedule } from '../components/info_cards/Schedule';
import { ImportantEvents } from '../components/info_cards/ImportantEvents';
import { Grading } from '../components/info_cards/Grading';
import { useEffect, useState } from 'react';
import { GradedItems } from '../components/info_cards/GradedItems';
import { Policies } from '../components/info_cards/Policies';
import { TextbookResources } from '../components/info_cards/TextbookResources';
import ClockLoader from "react-spinners/ClockLoader";
import { theme } from '../themes/theme';

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
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfAnalysisData, setPdfAnalysisData] = useState(null);
    const [profAnalysisData, setProfAnalysisData] = useState(null);

    const analyzeFile = async () => {
        let requestData = new FormData();
        requestData.append('file', selectedPdf);
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/analyze_pdf",
            {
                method: "POST",
                body: requestData,
                signal: AbortSignal.timeout(60000)
            }
        );
        const jsonResponse = await response.json();
        setPdfAnalysisData(jsonResponse.data);
    }

    const analyzeProfessor = () => {
        // TODO: send request to backend to analyze professor
    }

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        if (selectedPdf) {
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
                pdfAnalysisData ? (
                    <div style={dashboardStyle}>
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
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}>
                        <ClockLoader size={150} color={theme.palette.text.primary} />
                    </div>
                )
            }
        </>
    )
}