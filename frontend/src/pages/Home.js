import { Analyzer } from "./Analyzer";
import { tempData } from "../static/temp";
import { Typography } from "@mui/material";

export const Home = () => {  

    return (
        <div>
            <Typography>Test</Typography>
            <Analyzer data={tempData}/>
        </div>
    )
}