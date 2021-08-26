import React from "react";
import { IEverythingNewsResponse } from "../models/Articles";

interface MainProps {
    newsData: IEverythingNewsResponse
}

const Main: React.FC<MainProps> = ({ newsData }) => {

    return(
        <div>
            hi
        </div>
    )
}

export default Main;