import React from "react";
import styled from "styled-components";
import { IEverythingNewsResponse } from "../models/Articles";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';

interface MainProps {
    newsData: IEverythingNewsResponse
}

const ArticlesStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const TitleStyled = styled.div`
    font-size: 5em;
    padding-left: 1.5em;

    & img{
        height: 1em;
        width: 1em;
        padding-left: 0.3em;
    }
`

const Main: React.FC<MainProps> = ({ newsData }) => {

    let ArticleSize = OneThirdArticle
    let articleIndex = 0

    // Func to set they layout as repeating with a 3-1-2 article pattern
    const articleLayout = () => {
        if(articleIndex === 4){
            articleIndex++
            ArticleSize = OneHalfArticle
        } else if(articleIndex === 5){
            articleIndex = 0
            ArticleSize = OneHalfArticle
        }else if(articleIndex === 3){
            articleIndex++
            ArticleSize = OneArticle
        } else{
            articleIndex++
            ArticleSize = OneThirdArticle
        }
    }

    const searchTitleCheck = () => {
        switch(newsData.search){
            case "sports": return <TitleStyled style={{ color: "#FFA55C"}}>Sports<img src={sports} alt="football"/></TitleStyled>;
            case "entertainment": return <TitleStyled style={{ color: "#1FC8A3"}}>Entertainment<img src={entertainment} alt="camera"/></TitleStyled>;
            case "business": return <TitleStyled style={{ color: "#6F81D8"}}>Business<img src={business} alt="stock chart"/></TitleStyled>;
            case "health": return <TitleStyled style={{ color: "#00C0C8"}}>Health<img src={health} alt="heart"/></TitleStyled>;
            case "world": return <TitleStyled style={{ color: "#FF9A86"}}>World<img src={world} alt="world"/></TitleStyled>;
            default : return <TitleStyled>You searched for "{newsData.search}"</TitleStyled>;
        }
    }

    return(
        <>
            {newsData.status ? (
                <div>
                    {searchTitleCheck()}
                    <ArticlesStyled>
                        {newsData.articles.map((article, index) => {
                            articleLayout();
                            
                            return <ArticleSize key={index}>
                                <img src={article.urlToImage} alt="What the article is trying to explain"/>
                                <div className="info-container">
                                    <a className="title" href={article.url}>{article.title}</a>
                                    <div>{article.author}</div>
                                </div>
                            </ArticleSize>
                        })}
                    </ArticlesStyled>
                </div>
            ) : <div>Loading...</div>}
        </>
    )
}

export default Main;