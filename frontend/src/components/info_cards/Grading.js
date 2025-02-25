import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import GradingPieChart from "../GradingPieChart";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

export const Grading = ({ data }) => {
    const [grading, setGrading] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setGrading(data);
    }, [data]);

    const GradingContent = ({ grading, showExpandButton, onModalOpen }) => {
        return (
            <>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                    <Typography variant="h5">Grading</Typography>
                    {
                        showExpandButton &&
                        <IconButton size="small" onClick={onModalOpen}>
                            <FullscreenIcon />
                        </IconButton>
                    }
                </Stack>

                <Typography sx={{ fontWeight: "bold" }}>Breakdown:</Typography>
                <GradingPieChart breakdownData={grading.breakdown} />
                <Typography sx={{ fontWeight: "bold" }}>Cutoff:</Typography>
                {
                    grading.cutoff.length > 0 ? (
                        <table style={{ width: "100%" }}>
                            <thead>
                                <tr style={{ textAlign: "left" }}>
                                    <th>Mark</th>
                                    <th>Min Percent</th>
                                    <th>Max Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    grading.cutoff.map((cutoff, key) => (
                                        <tr key={key}>
                                            <td>{cutoff.mark}</td>
                                            <td>{cutoff.minimum_percentage}</td>
                                            <td>{cutoff.maximum_percentage}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <Typography>No cutoff data available</Typography>
                    )
                }
            </>
        );
    };

    return (
        <Box style={cardStyle}>
            {
                grading ? (
                    <>
                        <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                            <GradingContent grading={grading} showExpandButton={false} />
                        </GenericModal>
                        <GradingContent
                            grading={grading}
                            showExpandButton={true}
                            onModalOpen={() => setModalOpen(true)}
                        />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </Box>
    );
};
