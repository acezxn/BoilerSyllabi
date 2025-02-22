import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const TextbookResources = ({ data }) => {
    const [textbookResources, setTextbookResources] = useState([]);

    useEffect(() => {
        setTextbookResources(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            <Typography variant="h5">Textbooks</Typography>
            <table style={{ width: "100%" }}>
                <tr style={{ textAlign: "left" }}>
                    <th>Name</th>
                    <th>Required</th>
                </tr>
                {
                    textbookResources.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.required ? "✅" : "❌"}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}