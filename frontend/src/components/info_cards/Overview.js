import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStype } from "../../themes/style/info_cards/info_card";

export const Overview = ({ data }) => {
    const [overviewData, setOverviewData] = useState(null);

    useEffect(() => {
        setOverviewData(data);
    }, [data]);

    return (
        <div style={cardStype}>
            {
                overviewData ? (
                    <>
                        <Typography variant="h5">Overview</Typography>
                        <Typography sx={{ display: "inline-block", width: "20%" }}>Title:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.title}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "20%" }}>Course ID</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.course_id}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "20%" }}>Description</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.description}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Learning Objectives:</Typography>
                        {
                            overviewData.learning_objectives.map((objective, index) => {
                                return <Typography key={index}>- {objective}</Typography>
                            })
                        }
                        <br />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}