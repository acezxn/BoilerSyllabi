import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const Schedule = ({ data }) => {
    const [scheduleData, setScheduleData] = useState(null);

    useEffect(() => {
        setScheduleData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {scheduleData ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        Schedule
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>Lecture:</Typography>
                    <TableContainer component={Paper} sx={{ margin: 0 }}>
                        <Table sx={{ width: "100%", margin: 0 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Duration (minutes)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {scheduleData.lecture.map((lectureData, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{lectureData.date}</TableCell>
                                        <TableCell>{lectureData.duration}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <Typography sx={{ fontWeight: "bold" }}>Lab:</Typography>
                    {
                        scheduleData.lab.length > 0 ? (
                            <TableContainer component={Paper} sx={{ margin: 0 }}>
                                <Table sx={{ width: "100%", margin: 0 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Duration (minutes)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {scheduleData.lab.map((labData, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{labData.date}</TableCell>
                                                <TableCell>{labData.duration}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography>No lab information available</Typography>
                        )
                    }
                    <br />
                    <Typography sx={{ fontWeight: "bold" }}>Office hour:</Typography>
                    {
                        scheduleData.office_hour.length > 0 ? (
                            <TableContainer component={Paper} sx={{ margin: 0 }}>
                                <Table sx={{ width: "100%", margin: 0 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Duration (minutes)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {scheduleData.office_hour.map((labData, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{labData.date}</TableCell>
                                                <TableCell>{labData.duration}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography>No office hour information available</Typography>
                        )
                    }
                </>
            ) : (
                <Typography>Loading</Typography>
            )}
        </Box>
    );
};
