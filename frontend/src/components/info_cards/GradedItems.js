import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const GradedItems = ({ data }) => {
    const [gradedItems, setGradedItems] = useState(null);

    useEffect(() => {
        setGradedItems(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {
                gradedItems ? (
                    <>
                        <Typography variant="h5">Graded Items</Typography>
                        <br />
                        {
                            gradedItems.length > 0 ? (
                                <>
                                    {gradedItems.map((gradedItem, key) => (
                                        <Box key={key} sx={{ marginBottom: 2 }}>
                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ fontWeight: "bold" }}>Title:</Typography>
                                                <Typography>{gradedItem.title}</Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ fontWeight: "bold" }}>Summary:</Typography>
                                                <Typography>{gradedItem.summary}</Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ fontWeight: "bold" }}>Important Info:</Typography>
                                                <List>
                                                    {
                                                        gradedItem.important_info.map((item, index) => (
                                                            <ListItem key={index}>
                                                                <ListItemIcon><KeyboardArrowRightIcon /></ListItemIcon>
                                                                <ListItemText primary={item.info} />
                                                            </ListItem>
                                                        ))
                                                    }
                                                </List>
                                            </Box>
                                        </Box>
                                    ))}
                                </>
                            ) : (
                                <Typography>No graded items available</Typography>
                            )
                        }
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </Box>
    );
};
