import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const TextbookResourcesContent = ({ textbookResources, showExpandButton, onModalOpen }) => {
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Textbooks</Typography>
                {
                    showExpandButton &&
                    <IconButton size="small" onClick={onModalOpen}>
                        <FullscreenIcon />
                    </IconButton>
                }
            </Stack>

            {textbookResources.length > 0 ? (
                <TableContainer>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Required</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {textbookResources.map((item, key) => (
                                <TableRow key={key}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.required ? "✅" : "❌"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No textbook information available</Typography>
            )}
        </>
    );
};

export const TextbookResources = ({ data }) => {
    const [textbookResources, setTextbookResources] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setTextbookResources(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {textbookResources ? (
                <>
                    <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <TextbookResourcesContent textbookResources={textbookResources} showExpandButton={false} />
                    </GenericModal>

                    <TextbookResourcesContent
                        textbookResources={textbookResources}
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
