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
                    {todayNewsData.status ?

                        // map through array and return jsx for each element
                        todayNewsData.articles.map((article, i) => {
                            // console.log(article.url);
                            return (
                                // display article image, and title
                                <div key={i} className="article">
                                    <div className="imgWrapper">
                                        <img src={article.urlToImage} className="articleImg" alt={article.description}/>
                                    </div>
                                    <div className="articleHeadingWrapper">
                                        <h2>{article.title}</h2>
                                    </div>
                                </div>
                            )
                        }) : <div>Loading...</div>}
                </div>
        </div>
    )
}

export default TodayNews
