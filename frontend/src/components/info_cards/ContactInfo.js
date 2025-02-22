import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { cardStype } from "../../themes/style/info_cards/info_card";

export const ContactInfo = ({ data }) => {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setContactList(data);
    }, [data]);

    return (
        <div style={cardStype}>
            <Typography variant="h5">Contact Info</Typography>
            <table style={{ width: "100%" }}>
                <tr style={{ textAlign: "left" }}>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Contact</th>
                </tr>
                {
                    contactList.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.contact}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}