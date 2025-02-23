import { Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const Policies = ({ data }) => {
    const [policies, setPolicies] = useState(null);

    useEffect(() => {
        setPolicies(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                policies ? (
                    <>
                        <Typography variant="h5">Policies</Typography>
                        <br />
                        {
                            policies.length > 0 ? (
                                <>
                                    {
                                        policies.map((policy, key) => (
                                            <div key={key}>
                                                <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Title:</Typography>
                                                <Typography sx={{ display: "inline-block" }}>{policy.title}</Typography>
                                                <br />
                                                <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Summary:</Typography>
                                                <Typography sx={{ display: "inline-block" }}>{policy.summary}</Typography>
                                                <br />
                                                <Typography sx={{ fontWeight: "bold" }}>Important Info:</Typography>
                                                {
                                                    policy.important_info.map((item, index) => {
                                                        return <Typography key={index}>- {item.info}</Typography>
                                                    })
                                                }
                                                <br />
                                            </div>
                                        ))
                                    }
                                </>
                            ) : (
                                <Typography>No policy information available</Typography>
                            )
                        }
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}