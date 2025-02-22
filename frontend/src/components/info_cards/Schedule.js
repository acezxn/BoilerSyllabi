import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const Schedule = ({ data }) => {
    const [scheduleData, setScheduleData] = useState(null);

    useEffect(() => {
        setScheduleData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                scheduleData ? (
                    <>
                        <Typography variant="h5">Schedule</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Lecture:</Typography>
                        <table style={{ width: "100%" }}>
                            <tr style={{ textAlign: "left" }}>
                                <th>Date</th>
                                <th>Duration (hrs)</th>
                            </tr>
                            {
                                scheduleData.lecture.map((lectureData, key) => {

                                    return (
                                        <tr key={key}>
                                            <td>{lectureData.date}</td>
                                            <td>{lectureData.duration}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <br />
                    </>
                ) : (
                    <Typography>Loading</Typography>
                )
            }
        </div>
    )
}