import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { cardStyle } from "../../themes/style/info_cards/info_card";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import GenericModal from "../modal/generic_modal";

const PolicyItem = ({ policy }) => {
    return (
        <>
            <Typography sx={{ fontWeight: "bold" }}>Title:</Typography>
            <Typography>{policy.title}</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>Summary:</Typography>
            <Typography>{policy.summary}</Typography>
            <br />
            {policy.important_info.length > 0 && (
                <>
                    <Typography sx={{ fontWeight: "bold" }}>Important Info:</Typography>
                    <List>
                        {policy.important_info.map((item, index) => (
                            <ListItem key={index} sx={{ padding: 0, paddingBottom: 2 }}>
                                <ListItemIcon><KeyboardArrowRightIcon /></ListItemIcon>
                                <ListItemText primary={item.info} />
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
            <br />
        </>
    );
};

const PoliciesContent = ({policies, showExpandButton, onModalOpen}) => {
    console.log(policies)
    return <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h5">
                Policies
            </Typography>
            {
                showExpandButton && <IconButton size="small" onClick={onModalOpen}><FullscreenIcon /></IconButton>
            }
        </Stack>
        {policies.length > 0 ? (
            policies.map((policy, key) => <PolicyItem key={key} policy={policy} />)
        ) : (
            <Typography>No policy information available</Typography>
        )}
    </>
}
export const Policies = ({ data }) => {
    const [policies, setPolicies] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setPolicies(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {
                policies ? (
                    <>
                    <GenericModal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <PoliciesContent showExpandButton={false} policies={policies} />
                    </GenericModal>
                    <PoliciesContent policies={policies} showExpandButton={true} onModalOpen={() => setModalOpen(true)} />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </Box >
    );
};
