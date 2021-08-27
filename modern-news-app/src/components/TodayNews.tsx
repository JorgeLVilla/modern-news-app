import React, { useState, useEffect } from 'react';
import { ITodayNewsResponse } from '../models/TodayArticles'

// set type for todayNewsData that will be accessed as props
interface MainProps {
    todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {

    return (
        <div className="TodayNewsSection">
            <div className="titleContainer">
                <h1>Today</h1>
            </div>
            <div className="TodayNewsContent">
                <div className="articleContainer">
                    {todayNewsData.status ? 

                        // map through array and return jsx for each element
                        todayNewsData.articles.map((article, i) => {
                            console.log(article.author);
                            return (
                                <p key={i}>{article.author}</p>
                            ) 
                        }) : <div>Loading...</div>}
                </div>
            </div>
        </div>
    )
}

export default TodayNews
