import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const OverviewContent = ({ overviewData, showExpandButton, onModalOpen }) => {
    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">
                    Overview
                </Typography>
                {
                    showExpandButton && <IconButton size="small" onClick={onModalOpen}><FullscreenIcon /></IconButton>
                }
            </Stack>

            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="body1" sx={{ fontWeight: "bold", width: "30%" }}>
                    Title:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                    {overviewData.title}
                </Typography>
            </Stack>

            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="body1" sx={{ fontWeight: "bold", width: "30%" }}>
                    Course ID:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                    {overviewData.course_id}
                </Typography>
            </Stack>

            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="body1" sx={{ fontWeight: "bold", width: "30%" }}>
                    Professor:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                    {overviewData.professor}
                </Typography>
            </Stack>

            <Stack direction="column" spacing={0.1} mb={2}>
                <Typography variant="body1" sx={{ fontWeight: "bold", width: "30%" }}>
                    Description:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                    {overviewData.description}
                </Typography>
            </Stack>

            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                Learning Objectives:
            </Typography>
            <List>
                {overviewData.learning_objectives.map((objective, index) => (
                    <ListItem key={index} sx={{ padding: 0, paddingBottom: 2 }}>
                        <ListItemIcon><KeyboardArrowRightIcon /></ListItemIcon>
                        <ListItemText primary={objective} sx={{ margin: 0 }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export const Overview = ({ data }) => {
    const [overviewData, setOverviewData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setOverviewData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                overviewData ? (
                    <>
                        <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}><OverviewContent showExpandButton={false} overviewData={overviewData} /></GenericModal>
                        <OverviewContent overviewData={overviewData} showExpandButton={true} onModalOpen={() => setModalOpen(true)} />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}