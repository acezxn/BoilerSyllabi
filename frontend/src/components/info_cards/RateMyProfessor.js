import { Box, Link, Typography, CircularProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import { theme } from "../../themes/theme";

export const RateMyProfessor = ({ data }) => {
    const [rateMyProfessorData, setRateMyProfessorData] = useState(null);

    useEffect(() => {
        setRateMyProfessorData(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {rateMyProfessorData ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        Student Ratings
                    </Typography>
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
                </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};
