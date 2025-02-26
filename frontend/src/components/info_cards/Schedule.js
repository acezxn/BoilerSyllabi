import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Stack, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";
import { theme } from "../../themes/theme";

const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const googleCalendarLink = (eventTitle, eventDescription, eventLocation, startDate, endDate) => {
    const recurrenceRule = "RRULE:FREQ=WEEKLY";

    // Encode the event details for the URL
    const encodedTitle = encodeURIComponent(eventTitle);
    const encodedDescription = encodeURIComponent(eventDescription);
    const encodedLocation = encodeURIComponent(eventLocation);

    // Construct the Google Calendar URL with recurrence settings
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDate}/${endDate}&details=${encodedDescription}&location=${encodedLocation}&recur=${recurrenceRule}`;

    return googleCalendarUrl;
};

const getEventTimestamp = (weekday, time_of_day, duration_minutes) => {
    var date = new Date();
    let [hours, minutes] = time_of_day.split(':');
    date.setDate(date.getDate() + (((weekdays.indexOf(weekday) + 7 - date.getDay()) % 7) || 7));
    date.setHours(parseInt(hours), parseInt(minutes) + parseInt(duration_minutes), 0, 0);
    return date.toISOString().replace(/[^\w\s]/gi, '');
}

const ScheduleContent = ({ scheduleData, courseId, showExpandButton, onModalOpen }) => {
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
                                        <TableCell sx={{ padding: 1 }}>
                                            <Link
                                                sx={{ color: theme.palette.secondary.main }}
                                                target="_blank" rel="noopener noreferrer"
                                                href={
                                                    googleCalendarLink(
                                                        `${courseId} Lecture`,
                                                        `${courseId} Lecture`,
                                                        "",
                                                        getEventTimestamp(
                                                            lectureData.date.split(" ")[0].toLowerCase(),
                                                            lectureData.date.split(" ")[1].toLowerCase(),
                                                            0
                                                        ),
                                                        getEventTimestamp(
                                                            lectureData.date.split(" ")[0].toLowerCase(),
                                                            lectureData.date.split(" ")[1].toLowerCase(),
                                                            lectureData.duration
                                                        )
                                                    )
                                                }>
                                                {lectureData.date}
                                            </Link>
                                        </TableCell>
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
                                        <TableCell sx={{ padding: 1 }}>
                                            <Link
                                            sx={{ color: theme.palette.secondary.main }}
                                            target="_blank" rel="noopener noreferrer"
                                            href={
                                                googleCalendarLink(
                                                    `${courseId} Lab`,
                                                    `${courseId} Lab`,
                                                    "",
                                                    getEventTimestamp(
                                                        labData.date.split(" ")[0].toLowerCase(),
                                                        labData.date.split(" ")[1].toLowerCase(),
                                                        0
                                                    ),
                                                    getEventTimestamp(
                                                        labData.date.split(" ")[0].toLowerCase(),
                                                        labData.date.split(" ")[1].toLowerCase(),
                                                        labData.duration
                                                    )
                                                )
                                            }>
                                            {labData.date}
                                        </Link>
                                        </TableCell>
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
                                        <TableCell sx={{ padding: 1 }}>
                                        <Link
                                                sx={{ color: theme.palette.secondary.main }}
                                                target="_blank" rel="noopener noreferrer"
                                                href={
                                                    googleCalendarLink(
                                                        `${courseId} Office Hour`,
                                                        `${courseId} Office Hour`,
                                                        "",
                                                        getEventTimestamp(
                                                            officeHourData.date.split(" ")[0].toLowerCase(),
                                                            officeHourData.date.split(" ")[1].toLowerCase(),
                                                            0
                                                        ),
                                                        getEventTimestamp(
                                                            officeHourData.date.split(" ")[0].toLowerCase(),
                                                            officeHourData.date.split(" ")[1].toLowerCase(),
                                                            officeHourData.duration
                                                        )
                                                    )
                                                }>
                                                {officeHourData.date}
                                            </Link>
                                        </TableCell>
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

export const Schedule = ({ data, courseId }) => {
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
                        <ScheduleContent scheduleData={scheduleData} courseId={courseId} showExpandButton={false} />
                    </GenericModal>

                    <ScheduleContent
                        scheduleData={scheduleData}
                        courseId={courseId}
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
