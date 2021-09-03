import React, { useState } from "react";
import { IEverythingNewsResponse } from "../models/Articles";
import styled from "styled-components";
import { SectionContainer } from "../style/Wrappers.style";
import { OneArticle, OneThirdArticle } from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";
import { ArticlesStyled } from "./Main";


interface TopNewsProps {
    topNewsData: IEverythingNewsResponse;
}

const TopNews: React.FC<TopNewsProps> = ({ topNewsData }) => {
    
    const [enlargeArticle, setEnlargeArticle] = useState<number | null>(null)

        // seperate TodayNews from the rest of articles stored in props
        const returnFeaturedArticle = () => {
            const article = topNewsData.articles[0];
            
            return (
                <>
                {topNewsData.status? 
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
            const articles = topNewsData.articles.slice(1);
    
            return (
                <ArticlesStyled>
                {
                topNewsData.status?  
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
            <MainPageTitle>
                Top News
            </MainPageTitle>

            <ArticlesStyled>
                {returnFeaturedArticle()}
                {returnStandardArticles()}
            </ArticlesStyled>
            
        </SectionContainer>
    )
}

export default TopNews;