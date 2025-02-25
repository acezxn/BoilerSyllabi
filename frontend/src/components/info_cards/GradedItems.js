import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const GradedItemsContent = ({ gradedItems, showExpandButton, onModalOpen }) => {
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Graded Items</Typography>
                {
                    showExpandButton && 
                    <IconButton size="small" onClick={onModalOpen}>
                        <FullscreenIcon />
                    </IconButton>
                }
            </Stack>

            {
                gradedItems.length > 0 ? (
                    gradedItems.map((gradedItem, key) => (
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
                    ))
                ) : (
                    <Typography>No graded items available</Typography>
                )
            }
        </>
    );
};

export const GradedItems = ({ data }) => {
    const [gradedItems, setGradedItems] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setGradedItems(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {
                gradedItems ? (
                    <>
                        <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                            <GradedItemsContent gradedItems={gradedItems} showExpandButton={false} />
                        </GenericModal>
                        <GradedItemsContent 
                            gradedItems={gradedItems} 
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
