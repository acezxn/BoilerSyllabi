import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const ImportantEventsContent = ({ importantEventsData, showExpandButton, onModalOpen }) => {
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5" gutterBottom>
                    Important Events
                </Typography>
                {
                    showExpandButton &&
                    <IconButton size="small" onClick={onModalOpen}>
                        <FullscreenIcon />
                    </IconButton>
                }
            </Stack>

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
                                    <TableCell sx={{ padding: 1 }}>{event.name}</TableCell>
                                    <TableCell sx={{ padding: 1 }}>{event.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No important events available</Typography>
            )}
        </>
    );
};

export const ImportantEvents = ({ data }) => {
    const [importantEventsData, setImportantEventsData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setImportantEventsData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {importantEventsData ? (
                <>
                    <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <ImportantEventsContent importantEventsData={importantEventsData} showExpandButton={false} />
                    </GenericModal>

                    <ImportantEventsContent
                        importantEventsData={importantEventsData}
                        showExpandButton={true}
                        onModalOpen={() => setModalOpen(true)}
                    />
                </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};
