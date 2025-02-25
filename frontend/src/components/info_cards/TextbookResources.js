import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { cardStyle } from "../../themes/style/info_cards/info_card";

export const TextbookResources = ({ data }) => {
    const [textbookResources, setTextbookResources] = useState([]);

    useEffect(() => {
        setTextbookResources(data);
    }, [data]);

    return (
        <Box style={cardStyle}>
            <Typography variant="h5" gutterBottom>
                Textbooks
            </Typography>
            {textbookResources.length > 0 ? (
                <TableContainer>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Required</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {textbookResources.map((item, key) => (
                                <TableRow key={key}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.required ? "✅" : "❌"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No textbook information available</Typography>
            )}
        </Box>
    );
};
