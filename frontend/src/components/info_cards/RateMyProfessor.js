import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const RateMyProfessor = ({ data }) => {
    const [rateMyProfessorData, setRateMyProfessorData] = useState(null);

    useEffect(() => {
        setRateMyProfessorData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                rateMyProfessorData ? (
                    <>
                        <Typography variant="h5">Student Ratings</Typography>
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Overall Score:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.overall_score}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Mean Difficulty:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.mean_difficulty}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Feedback:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.summary}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Reference:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.link}</Typography>
                        <br />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}