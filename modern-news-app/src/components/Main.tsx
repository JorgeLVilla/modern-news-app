import React, { useState } from "react";
import styled from "styled-components";
import { IEverythingNewsResponse } from "../models/Articles";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';

export const ArticlesStyled = styled.div`
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

const EnlargedArticle = styled.div`
    height: auto;
    width: 103.5em;
    margin: 3em 5em;
    display: flex;
    flex-direction: row;

    & img{
        height: 30em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px grey;
        margin-right: 2em;
    }

    & button{
        height: 2em;
        width: 2em;
        color: white;
        background-color: black;
        border: white solid 1px;
        border-radius: 50%;
        position: relative;
        right: 3em;
        top: 1em;
        box-shadow: 0 0 7px white;
    }

    & .info-container{
        width: 51em;
        box-shadow: 4px 4px 7px grey;
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;

        & .title{
            width: 95%;
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }
    }
`

interface MainProps {
    newsData: IEverythingNewsResponse
}

const Main: React.FC<MainProps> = ({ newsData }) => {

    const [enlargeArticle, setEnlargeArticle] = useState<number | null>(null)

    let ArticleSize = OneThirdArticle
    let articleIndex = 0

    // Func to set they layout as repeating with a 3-1-2 article pattern
    const articleLayout = ():void => {
        if(articleIndex === 4){
            articleIndex++;
            ArticleSize = OneHalfArticle;
        } else if(articleIndex === 5){
            articleIndex = 0;
            ArticleSize = OneHalfArticle;
        }else if(articleIndex === 3){
            articleIndex++;
            ArticleSize = OneArticle;
        } else{
            articleIndex++;
            ArticleSize = OneThirdArticle;
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
                            return (enlargeArticle !== index ? 

                            <ArticleSize 
                                key={index} 
                                onClick={() => {setEnlargeArticle(index)}}
                            >
                                <img src={article.urlToImage} alt="What the article is trying to explain"/>
                                <div className="info-container">
                                    <div className="title" >{article.title}</div>
                                    <div>{article.author}</div>
                                </div>
                            </ArticleSize> :

                            <EnlargedArticle key={index}>
                                <img src={article.urlToImage} alt="What the article is trying to explain"/>
                                <div className="info-container">
                                    <div className="title" >{article.title}</div>
                                    <div>{article.author}</div>
                                </div>
                                <button onClick={() => {setEnlargeArticle(null)}}>X</button>
                            </EnlargedArticle>)
                        })}
                    </ArticlesStyled>
                </div>
            ) : <div>Loading...</div>}
        </>
    )
}

export default Main;