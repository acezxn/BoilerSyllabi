import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const ImportantEvents = ({ data }) => {
    const [importantEventsData, setImportantEventsData] = useState(null);

    useEffect(() => {
        setImportantEventsData(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                importantEventsData ? (
                    <>
                        <Typography variant="h5">Important Events</Typography>
                        <table style={{ width: "100%" }}>
                            <tr style={{ textAlign: "left" }}>
                                <th>Event Name</th>
                                <th>Event Date (hrs)</th>
                            </tr>
                            {
                                importantEventsData.map((event, key) => {

                                    return (
                                        <tr key={key}>
                                            <td>{event.name}</td>
                                            <td>{event.date}</td>
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