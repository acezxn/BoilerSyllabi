import { Box, Link, Typography, CircularProgress, Stack, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import { theme } from "../../themes/theme";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const RateMyProfessorContent = ({ rateMyProfessorData, showExpandButton, onModalOpen }) => {
    console.log(showExpandButton)
    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">
                    Student Ratings
                </Typography>
                {
                    showExpandButton && <IconButton size="small" onClick={onModalOpen}><FullscreenIcon /></IconButton>
                }
            </Stack>

            <Stack direction="row" spacing={2} mb={2}>
                <Typography sx={{ fontWeight: "bold", width: "40%" }}>Overall Score:</Typography>
                <Typography>{rateMyProfessorData.overall_rating}</Typography>
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography sx={{ fontWeight: "bold", width: "40%" }}>Mean Difficulty:</Typography>
                <Typography>{rateMyProfessorData.mean_difficulty}</Typography>
            </Stack>

            <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Feedback:</Typography>
                <Typography>{rateMyProfessorData.summary}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Reference:</Typography>
                <Link href={rateMyProfessorData.link} sx={{ color: theme.palette.secondary.main }} target="_blank" rel="noopener noreferrer">
                    {rateMyProfessorData.link}
                </Link>
            </Box>
        </Box>
    );
};

export const RateMyProfessor = ({ data }) => {
    const [rateMyProfessorData, setRateMyProfessorData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setRateMyProfessorData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {
                rateMyProfessorData ? (
                    <>
                        <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                            <RateMyProfessorContent rateMyProfessorData={rateMyProfessorData} showExpandButton={false} />
                        </GenericModal>
                        <RateMyProfessorContent rateMyProfessorData={rateMyProfessorData} showExpandButton={true} onModalOpen={() => { setModalOpen(true) }} />
                    </>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress />
                    </Box>
                )
            }
        </Box>
    );
};
