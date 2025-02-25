import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { cardStyle } from "../../themes/style/info_cards/info_card";

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
                            <ListItem key={index} sx={{padding: 0, paddingBottom: 2}}>
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

export const Policies = ({ data }) => {
    const [policies, setPolicies] = useState(null);

    useEffect(() => {
        setPolicies(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            {policies ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        Policies
                    </Typography>
                    {policies.length > 0 ? (
                        policies.map((policy, key) => <PolicyItem key={key} policy={policy} />)
                    ) : (
                        <Typography>No policy information available</Typography>
                    )}
                </>
            ) : (
                <Typography>Loading</Typography>
            )}
        </Box>
    );
};
