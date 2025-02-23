import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const Overview = ({ data }) => {
    const [overviewData, setOverviewData] = useState(null);

    useEffect(() => {
        setOverviewData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                overviewData ? (
                    <>
                        <Typography variant="h5">Overview</Typography>
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Title:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.title}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Course ID:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.course_id}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Professor:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.professor}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Description:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{overviewData.description}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Learning Objectives:</Typography>
                        <ul>

                            {
                                overviewData.learning_objectives.map((objective, index) => {
                                    return <li><Typography key={index}>{objective}</Typography></li>
                                })
                            }

                        </ul>
                        <br />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}