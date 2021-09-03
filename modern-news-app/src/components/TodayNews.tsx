import React from 'react';
import { ITodayNewsResponse } from '../models/TodayArticles';
import { OneArticle, OneThirdArticle } from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";

// set type for todayNewsData that will be accessed as props
interface MainProps {
    todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {

    let ArticleSize = OneThirdArticle
    // let articleIndex = 0
        
    // seperate TodayNews from the rest of articles stored in props
    const returnFeaturedArticle = () => {
        const article = todayNewsData.articles[0];
        
        return (
            <>
            {todayNewsData.status?
            <OneArticle>
            <ArticleSize>
            <div className="img-block">
                <img src={article.urlToImage} alt="What the article is trying to explain"/>
                <span className="click-here">Click to see more</span>
            </div>
            <div className="info-container">
                <div>
                    <div className="title" >{article.title}</div>
                    <div className="description">Description:<br/>{article.description}</div>
                </div>
                <div className="bottom-info">
                    <div>Author: {article.author}</div>
                    <div>From: {article.source.name}</div>
                </div>
            </div>
        </ArticleSize>
        </OneArticle>
                : "Loading..."}
            </>
            )
        }

    // map through rest of articles with a different grouping
    const returnStandardArticles = () => {
        const articles = todayNewsData.articles.slice(1);

        return (
            <>
            {
            todayNewsData.status?  
                articles.map((article, i) => {

                    return (
                        <OneThirdArticle>
                        <ArticleSize>
                                <div className="img-block">
                                    <img src={article.urlToImage} alt="What the article is trying to explain"/>
                                    <span className="click-here">Click to see more</span>
                                </div>
                                <div className="info-container">
                                    <div>
                                        <div className="title" >{article.title}</div>
                                        <div className="description">Description:<br/>{article.description}</div>
                                    </div>
                                    <div className="bottom-info">
                                        <div>Author: {article.author}</div>
                                        <div>From: {article.source.name}</div>
                                    </div>
                                </div>
                            </ArticleSize>
                            </OneThirdArticle>
                    )

                }) 
                : "Loading..."
            }
            </>
        )
    }    

    return (
        <>
            <div>
                <MainPageTitle>Today</MainPageTitle>
            </div>
            
            {returnFeaturedArticle()}
            {returnStandardArticles()}

        </>
        
    )
}

export default TodayNews

