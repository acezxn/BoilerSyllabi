import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";
import GradingPieChart from "../GradingPieChart";

export const Grading = ({ data }) => {
    const [grading, setGrading] = useState(null);

    useEffect(() => {
        setGrading(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                grading ? (
                    <>
                        <Typography variant="h5">Grading</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Breakdown:</Typography>
                        <GradingPieChart breakdownData={grading.breakdown} />
                        <Typography sx={{ fontWeight: "bold" }}>Cutoff:</Typography>
                        {
                            grading.cutoff.length > 0 ? (
                                <table style={{ width: "100%" }}>
                                    <tr style={{ textAlign: "left" }}>
                                        <th>Mark</th>
                                        <th>Min Percent</th>
                                        <th>Max Percent</th>
                                    </tr>
                                    {
                                        grading.cutoff.map((cutoff, key) => {

                                            return (
                                                <tr key={key}>
                                                    <td>{cutoff.mark}</td>
                                                    <td>{cutoff.minimum_percentage}</td>
                                                    <td>{cutoff.maximum_percentage}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            ) : (
                                <Typography>No cutoff data available</Typography>
                            )
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