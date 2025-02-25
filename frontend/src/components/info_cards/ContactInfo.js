import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const ContactInfo = ({ data }) => {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setContactList(data);
    }, [data]);

    return (
        <div style={cardStyle}>
            <Typography variant="h5">
                Contact Info
            </Typography>
            <Table sx={{ width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contactList.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.role}</TableCell>
                            <TableCell>{item.contact}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
