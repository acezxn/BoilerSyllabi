import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const ImportantEvents = ({ data }) => {
    const [importantEventsData, setImportantEventsData] = useState(null);

    useEffect(() => {
        setImportantEventsData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {importantEventsData ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        Important Events
                    </Typography>
                    {importantEventsData.length > 0 ? (
                        <TableContainer>
                            <Table sx={{ width: "100%" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }}>Event Name</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Event Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {importantEventsData.map((event, key) => (
                                        <TableRow key={key}>
                                            <TableCell>{event.name}</TableCell>
                                            <TableCell>{event.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Typography>No important events available</Typography>
                    )}
                </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};
