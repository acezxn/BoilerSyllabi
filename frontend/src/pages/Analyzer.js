import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

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
    const { data } = props;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Item>
                        <Header>
                            Title
                        </Header>
                        <Value>
                            Text
                        </Value>
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>size=4</Item>
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