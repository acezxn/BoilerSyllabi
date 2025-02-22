import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { cs307TempData } from '../static/temp';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Header = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    color: theme.palette.secondary.main,
}));

const Value = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.primary.contrastText,
}));

export const Analyzer = (props) => {
    //const { data } = props;
    const data = cs307TempData.data;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Item>
                        <Header>Contact Info</Header>
                        {data.contact.map((item, index) => {
                            return (
                                <Box>
                                    <Value>{item.contact}</Value>
                                    <Value>{item.name}</Value>
                                    <Value>{item.role}</Value>
                                </Box>
                            );
                        })}
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>
                    <Header>Graded Items</Header>
                        {data.graded_items.map((item, index) => {
                            return (
                                <Box>
                                    <Value>{item.important_info[0].info}</Value>
                                    <Value>{item.summary}</Value>
                                    <Value>{item.title}</Value>
                                    <Divider orientation="horizontal" flexItem />
                                </Box>
                            );
                        })}
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>size=4</Item>
                </Grid>
                <Grid size={8}>
                    <Item>size=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}