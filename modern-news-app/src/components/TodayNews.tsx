import React, { useState } from 'react';

const TodayNews = () => {
    const [TodayNewsData, setTodayNewsData] = useState({});

    // insert styled component variables in here


    return (
        <div className="TodayNewsSection">
            <div className="titleContainer">
                <h1>Today</h1>
            </div>
            <div className="TodayNewsContent">
                {}
            </div>
        </div>
    )
}

export default TodayNews
