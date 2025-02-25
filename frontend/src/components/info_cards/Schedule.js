import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const ScheduleContent = ({ scheduleData, showExpandButton, onModalOpen }) => {
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Schedule</Typography>
                {
                    showExpandButton &&
                    <IconButton size="small" onClick={onModalOpen}>
                        <FullscreenIcon />
                    </IconButton>
                }
            </Stack>

            <Typography sx={{ fontWeight: "bold" }}>Lecture:</Typography>
            {
                scheduleData.lecture.length > 0 ? (
                    <TableContainer component={Paper} sx={{ margin: 0 }}>
                        <Table sx={{ width: "100%", margin: 0 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Duration (minutes)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {scheduleData.lecture.map((lectureData, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ padding: 1 }}>{lectureData.date}</TableCell>
                                        <TableCell sx={{ padding: 1 }}>{lectureData.duration}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography>No lecture information available</Typography>
                )
            }
            <br />
            <Typography sx={{ fontWeight: "bold" }}>Lab:</Typography>
            {
                scheduleData.lab.length > 0 ? (
                    <TableContainer component={Paper} sx={{ margin: 0 }}>
                        <Table sx={{ width: "100%", margin: 0 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Duration (minutes)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {scheduleData.lab.map((labData, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ padding: 1 }}>{labData.date}</TableCell>
                                        <TableCell sx={{ padding: 1 }}>{labData.duration}</TableCell>
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
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Duration (minutes)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {scheduleData.office_hour.map((officeHourData, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ padding: 1 }}>{officeHourData.date}</TableCell>
                                        <TableCell sx={{ padding: 1 }}>{officeHourData.duration}</TableCell>
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
    );
};

export const Schedule = ({ data }) => {
    const [scheduleData, setScheduleData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setScheduleData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {scheduleData ? (
                <>
                    <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <ScheduleContent scheduleData={scheduleData} showExpandButton={false} />
                    </GenericModal>

                    <ScheduleContent
                        scheduleData={scheduleData}
                        showExpandButton={true}
                        onModalOpen={() => setModalOpen(true)}
                    />
                </>
            ) : (
                <Typography>Loading</Typography>
            )}
        </Box>
    );
};
