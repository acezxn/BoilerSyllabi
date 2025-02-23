import { Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const GradedItems = ({ data }) => {
    const [gradedItems, setGradedItems] = useState(null);

    useEffect(() => {
        setGradedItems(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            {
                gradedItems ? (
                    <>
                        <Typography variant="h5">Graded Items</Typography>
                        <br />
                        {
                            gradedItems.length > 0 ? (
                                <>
                                    {
                                        gradedItems.map((gradedItem, key) => (
                                            <div key={key}>
                                                <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Title:</Typography>
                                                <Typography sx={{ display: "inline-block" }}>{gradedItem.title}</Typography>
                                                <br />
                                                <Typography sx={{ display: "inline-block", width: "30%", fontWeight: "bold" }}>Summary:</Typography>
                                                <Typography sx={{ display: "inline-block" }}>{gradedItem.summary}</Typography>
                                                <br />
                                                <Typography sx={{ fontWeight: "bold" }}>Important Info:</Typography>
                                                <ul>

                                                    {
                                                        gradedItem.important_info.map((item, index) => {
                                                            return <li><Typography key={index}>{item.info}</Typography></li>
                                                        })
                                                    }

                                                </ul>
                                                <br />

                                            </div>
                                        ))
                                    }
                                </>
                            ) : (
                                <Typography>No graded items available</Typography>
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