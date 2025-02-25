import { Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const ContactInfoContent = ({ contactList, showExpandButton, onModalOpen }) => {
    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">
                    Contact Info
                </Typography>
                {
                    showExpandButton && (
                        <IconButton size="small" onClick={onModalOpen}>
                            <FullscreenIcon />
                        </IconButton>
                    )
                }
            </Stack>

            <Table sx={{ width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Role</TableCell>
                        <TableCell sx={{ fontWeight: "bold", padding: 1 }}>Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contactList.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ padding: 1 }}>{item.name}</TableCell>
                            <TableCell sx={{ padding: 1 }}>{item.role}</TableCell>
                            <TableCell sx={{ padding: 1 }}>{item.contact}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export const ContactInfo = ({ data }) => {
    const [contactList, setContactList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setContactList(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                contactList.length > 0 ? (
                    <>
                        <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                            <ContactInfoContent contactList={contactList} showExpandButton={false} onModalOpen={() => setModalOpen(true)} />
                        </GenericModal>
                        <ContactInfoContent contactList={contactList} showExpandButton={true} onModalOpen={() => setModalOpen(true)} />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    );
};
