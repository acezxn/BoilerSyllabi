import { Analyzer } from "./Analyzer";
import { tempData } from "../static/temp";

export const Home = () => {  

    return (
        <div>
            <h1>Test</h1>
            <Analyzer data={tempData}/>
        </div>
    )
}