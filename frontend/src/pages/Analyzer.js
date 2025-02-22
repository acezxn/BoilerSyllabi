import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { cs307TempData } from '../static/temp';
import GradingPieChart from '../components/GradingPieChart';
import { ContactInfo } from '../components/info_cards/ContactInfo';
import { Overview } from '../components/info_cards/Overview';
import { Schedule } from '../components/info_cards/Schedule';
import { ImportantEvents } from '../components/info_cards/ImportantEvents';
import { Grading } from '../components/info_cards/Grading';
import { useEffect, useState } from 'react';

const dashboardStyle = {
    margin: 10,
    marginBottom: 0,
    display: "grid",
    width: "calc(100vw - 20px)",
    gap: 10,
    gridTemplateColumns: "auto auto auto"
}

export const Analyzer = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        console.log(width);
    }, [width])

    const data = cs307TempData.data;

    return (
        <>
            <CssBaseline />
            <div style={dashboardStyle}>
                {
                    width > 1200 ? (
                        <>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <ContactInfo data={data.contact} />
                                <Overview data={data.overview} />
                            </div>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <Schedule data={data.schedule} />
                                <Grading data={data.grading} />
                            </div>
                            <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                <ImportantEvents data={data.important_events} />
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                width > 800 ? (
                                    <>
                                        <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                            <ContactInfo data={data.contact} />
                                            <Overview data={data.overview} />
                                            <Schedule data={data.schedule} />
                                        </div>
                                        <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                            <ImportantEvents data={data.important_events} />
                                            <Grading data={data.grading} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ minWidth: "calc(100vw - 20)" }}>
                                            <ContactInfo data={data.contact} />
                                            <Overview data={data.overview} />
                                            <Schedule data={data.schedule} />
                                            <ImportantEvents data={data.important_events} />
                                            <Grading data={data.grading} />
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