import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";
<<<<<<< HEAD
=======
import { theme } from "../../themes/theme";
>>>>>>> 1d7c7b41b958db427e383a68639f4803b20a27ff

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
                        <Typography sx={{ display: "inline-block", width: "50%", fontWeight: "bold" }}>Overall Score:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.overall_rating}</Typography>
                        <br />
                        <Typography sx={{ display: "inline-block", width: "50%", fontWeight: "bold" }}>Mean Difficulty:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.mean_difficulty}</Typography>
                        <br />
                        <Typography sx={{ fontWeight: "bold" }}>Feedback:</Typography>
                        <Typography sx={{ display: "inline-block" }}>{rateMyProfessorData.summary}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Reference:</Typography>
<<<<<<< HEAD
                        <Link sx={{ display: "inline-block" }} href={rateMyProfessorData.link}>{rateMyProfessorData.link}</Link>
=======
                        <Link sx={{ display: "inline-block", color: theme.palette.secondary.main }} href={rateMyProfessorData.link}>{rateMyProfessorData.link}</Link>
>>>>>>> 1d7c7b41b958db427e383a68639f4803b20a27ff
                        <br />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}