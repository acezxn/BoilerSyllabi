import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import StarBorder from '@mui/icons-material/StarBorder';
import { CssBaseline, ListItemIcon, Typography } from '@mui/material';
import { cs307TempData } from '../static/temp';
import GradingPieChart from '../components/GradingPieChart';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SubItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Header = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    color: theme.palette.secondary.contrastText,
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
            <CssBaseline />
            <Grid container spacing={2}>
            <Grid size={12}>
                <Header>{data.overview.course_id}</Header>
                <Value>{data.overview.description}</Value>
                <List>
                {data.overview.learning_objectives.map((item, index) => {
                    return (
                        <ListItem>
                            <ListItemIcon>
                                <StarBorder sx={{ color: "#ffffff"}}></StarBorder>
                            </ListItemIcon>
                            <Value>{item}</Value>
                        </ListItem>
                    )
                })}
                </List>
            </Grid>
            <Grid size={5}>
                    <Item>
                        <Header>Grading Breakdown</Header>
                        <GradingPieChart breakdownData={data.grading.breakdown} />
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>
                        <Header>Important Events</Header>
                        {data.important_events.map((item, index) => {
                            return (
                                <Grid size={4}>
                                    <SubItem>
                                        <Value>{item.name}</Value>
                                        <Value>{item.date}</Value>
                                    </SubItem>
                                </Grid>
                            )
                        })}
                    </Item>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <Header>Contact Info</Header>
                        <Grid container spacing={2}>
                            {data.contact.map((item, index) => {
                                return (
                                    <Grid size={4}>
                                        <SubItem>
                                            <Value>{item.name}</Value>
                                            <Value>{item.role}</Value>
                                            <Value>{item.contact}</Value>
                                        </SubItem>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Item>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <Header>Graded Items</Header>
                        <Grid container spacing={2}>
                            {data.graded_items.map((item, index) => {
                                return (
                                    <Grid size={6}>
                                        <SubItem>
                                            <Value>{item.title}</Value>
                                            {item.important_info.map((arr_item, index) => {
                                                return (
                                                    <Value>{arr_item.info}</Value>
                                                )
                                            })}
                                            <Value>Summary: {item.summary}</Value>
                                        </SubItem>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}