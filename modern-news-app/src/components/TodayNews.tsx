import React, { useState, useEffect } from 'react';
import { ITodayNewsResponse } from '../models/TodayArticles';
import styled, { css } from 'styled-components';


// styled component variables
const TodayNewsSection = styled.div`
    border: 2px solid red;

    & .FeaturedArticle {
        margin: 50px auto;
        width: 10%;
        height: auto;
        border: 3px solid green;
        padding: 30px;
        display: flex;
        flex-direction: row;
        background-color: red;
    }

    & .StandardArticle {
        width: 350px;
    }
`;

    export const TitleContainer = styled.div`
        border: 2px dashed red;
        margin-bottom: 25px;
    `;

    export const TodayNewsArticles = styled.div`
        border: 2px solid white;
        display: flex;
        flex-direction: column;
        
    `;

    export const FeaturedArticle = styled.div`
        margin: 50px auto;
        width: 90%;
        height: auto;
        border: 2px solid green;
        padding: 30px;
        display: flex;
    `;

    export const StandardArticlesContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        border: 3px solid pink;
    `;

    export const StandardArticle = styled.div`
        margin: 50px auto;
        width: 350px;
        display: flex;
    `;

    export const FeaturedImgWrapper = styled.div`
        padding-left: 20px;
        padding-right: 20px;
    `;

    export const StandardImgWrapper = styled.div`

    `;

    export const FeaturedImg = styled.img`
        width: 450px;
        height: 450px;
        object-fit: cover;
    `;

    export const StandardImg = styled.img`
        width: 350px;
        height: auto;
    `;

    export const ArticleHeadingWrapper = styled.div`
        border: 2px solid purple;
        width: 400px;
        background: #000;
        padding: 25px;
    `;

// set type for todayNewsData that will be accessed as props
interface MainProps {
    todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {

    return (
        <TodayNewsSection>
            <TitleContainer>
                <h1>Today</h1>
            </TitleContainer>

                    {todayNewsData.status ?
                            
                        // map through array and return jsx for each element
                        todayNewsData.articles.map((article, i) => {
                            return (
                                <TodayNewsArticles>
                                    {/* // display article image, and title, if first, then display as featured article */}

                                    <div key={i} className={i === 0 ? "FeaturedArticle" : "StandardArticle"}>
                                        <FeaturedImgWrapper>
                                            <FeaturedImg src={article.urlToImage} className="articleImg" alt={article.description}/>
                                        </FeaturedImgWrapper>
                                        <ArticleHeadingWrapper>
                                            <h2>{article.title}</h2>
                                        </ArticleHeadingWrapper>
                                    </div> 

                                </TodayNewsArticles>
                            )
                        }) : <div>Loading...</div>}
        </TodayNewsSection>
        
    )
}

export default TodayNews
