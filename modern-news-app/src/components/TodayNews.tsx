import React from 'react';
import styled from "styled-components";
import { ITodayNewsResponse } from '../models/TodayArticles';
import { OneArticle, OneThirdArticle } from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";
import { SectionContainer } from "../style/Wrappers.style";
import { ArticlesStyled } from "./Main";

// set type for todayNewsData that will be accessed as props
interface MainProps {
    todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {

    let ArticleSize = OneThirdArticle
    let articleIndex = 0
        
    // seperate TodayNews from the rest of articles stored in props
    const returnFeaturedArticle = () => {
        const article = todayNewsData.articles[0];
        
        return (
            <>
            {todayNewsData.status? 
                <OneArticle>
                        <img src={article.urlToImage} className="articleImg" alt={article.description}/>
                    <div className="info-container">
                        <h2 className="title">{article.title}</h2>
                    </div>
                </OneArticle>
                : "Loading..."}
            </>
            )
        }

    // map through rest of articles with a different grouping
    const returnStandardArticles = () => {
        const articles = todayNewsData.articles.slice(1);

        return (
            <ArticlesStyled>
            {
            todayNewsData.status?  
                articles.map((article, i) => {

                    return (
                        <OneThirdArticle key={i}>
                            <img src={article.urlToImage} alt={article.description} />
                            <div className="info-container">
                                {article.content}
                            </div>
                        </OneThirdArticle>
                    )

                }) 
                : "Loading..."
            }
            </ArticlesStyled>
        )
    }    

    return (
        <SectionContainer>
            <MainPageTitle>Today</MainPageTitle>

            <ArticlesStyled>
                {returnFeaturedArticle()}
                {returnStandardArticles()} 
            </ArticlesStyled>
            

        </SectionContainer>
        
    )
}

export default TodayNews

