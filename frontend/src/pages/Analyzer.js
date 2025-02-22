import { CssBaseline, ListItemIcon, Typography } from '@mui/material';
import { cs307TempData } from '../static/temp';
import { ContactInfo } from '../components/info_cards/ContactInfo';
import { Overview } from '../components/info_cards/Overview';
import { Schedule } from '../components/info_cards/Schedule';
import { ImportantEvents } from '../components/info_cards/ImportantEvents';
import { Grading } from '../components/info_cards/Grading';
import { useEffect, useState } from 'react';
import { GradedItems } from '../components/info_cards/GradedItems';
import { Policies } from '../components/info_cards/Policies';
import { TextbookResources } from '../components/info_cards/TextbookResources';

const dashboardStyle = {
    margin: 10,
    marginBottom: 0,
    display: "grid",
    width: "calc(100vw - 20px)",
    gap: 10,
    gridTemplateColumns: "auto auto auto"
}

export const Analyzer = ({file}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfAnalysisData, setPdfAnalysisData] = useState(null);
    const [profAnalysisData, setProfAnalysisData] = useState(null);

    const analyzeFile = () => {
        // TODO: send request to backend to analyze pdf
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
        setSelectedPdf(file);
    }, [file])

    const data = cs307TempData.data;

    return (
        <>
            <CssBaseline />
            <div style={dashboardStyle}>
                {
                    width > 1200 ? (
                        <>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <Overview data={data.overview} />
                                <ContactInfo data={data.contact} />
                                <Policies data={data.policies} />
                            </div>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <Schedule data={data.schedule} />
                                <ImportantEvents data={data.important_events} />
                                <TextbookResources data={data.textbook_resources} />
                            </div>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <Grading data={data.grading} />
                                <GradedItems data={data.graded_items} />
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                width > 800 ? (
                                    <>
                                        <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                            <Overview data={data.overview} />
                                            <ContactInfo data={data.contact} />
                                            <Policies data={data.policies} />
                                            <TextbookResources data={data.textbook_resources} />
                                        </div>
                                        <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                            <Schedule data={data.schedule} />
                                            <ImportantEvents data={data.important_events} />
                                            <Grading data={data.grading} />
                                            <GradedItems data={data.graded_items} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ minWidth: "calc(100vw - 20)" }}>
                                            <Overview data={data.overview} />
                                            <Schedule data={data.schedule} />
                                            <ContactInfo data={data.contact} />
                                            <ImportantEvents data={data.important_events} />
                                            <Grading data={data.grading} />
                                            <GradedItems data={data.graded_items} />
                                            <Policies data={data.policies} />
                                            <TextbookResources data={data.textbook_resources} />
                                        </div>
                                    </>
                                )
                            }

                        </>
                    )
                }
            </div>
        </>
    )
}