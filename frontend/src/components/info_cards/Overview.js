import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Overview = ({ data }) => {
    const [overviewData, setOverviewData] = useState(null);

    useEffect(() => {
        setOverviewData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                overviewData ? (
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Overview
                        </Typography>

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
                                    <ListItemText primary={objective} sx={{margin: 0}} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}