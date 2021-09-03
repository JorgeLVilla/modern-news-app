import React, { useState } from "react";
import styled from "styled-components";
import { EverythingNewsResponse, IEverythingNewsResponse } from "../models/Articles";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';
import back from '../assets/back.png';

const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 6.5em;
    align-items: center;

    & .back-section{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 0.8em;

        & .back-button{
            position: relative;
            top: 0.5em;
            height: 4.5em;
        }

        & .back-message{
            font-size: 0.8em;
            text-align: center;
            opacity: 0.0;
            transition: opacity 1s ease-in-out;
            padding-top: 1em;
        }

        &:hover{
            & .back-message{
                opacity: 1.0;
                transition: opacity .55s ease-in-out;
            }
        }
    }

`

const TitleStyled = styled.div`
    font-size: 5em;
    
    & img{
        height: 1em;
        width: 1em;
        padding-left: 0.3em;
    }
`

export const EnlargedArticle = styled.div<IEnlargeArticleProps>`
    height: auto;
    width: 103.5em;
    margin: 3em 5em;
    display: flex;
    flex-direction: row;

    & img{
        height: 30em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
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
        box-shadow: 0 0 7px ${props => props.mainColor};
    }

    & .info-container{
        width: 51em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .title{
            width: 95%;
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }

        & .url{
            display: inline-block;
            color: black;
            text-decoration: none;
            background-color: white;
            border-radius: 5px;
            padding: 0 0.5em;
            margin-top: 1em;
        }
        
        & .bottom-info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

export const ArticlesStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

interface MainProps {
    newsData: IEverythingNewsResponse
    setNewsData: Function;
}

export interface IEnlargeArticleProps {
    mainColor: string;
}

const Main: React.FC<MainProps> = ({ newsData, setNewsData }) => {

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

    // Setting the Title of the Main page based off of what button was pressed
    const searchTitleCheck = () => {
        switch(newsData.search){
            case "sports": return <div>Sports<img src={sports} alt="football"/></div>;
            case "entertainment": return <>Entertainment<img src={entertainment} alt="camera"/></>;
            case "business": return <>Business<img src={business} alt="stock chart"/></>;
            case "health": return <>Health<img src={health} alt="heart"/></>;
            case "world": return <>World<img src={world} alt="world"/></>;
            default : return <>You searched for {newsData.search}</>;
        }
    }

    // Set things like the Title color and the box shadow color
    const mainColorCheck = (): string => {
        switch(newsData.search){
            case "sports": return "#FFA55C" ;
            case "entertainment": return "#1FC8A3";
            case "business": return "#6F81D8";
            case "health": return "#00C0C8";
            case "world": return "#FF9A86";
            default : return "white";
        }
    }

    return(
        <>
            {newsData.status ? (
                <div>
                    <TitleSection>
                        <div className="back-section">
                            <img 
                                className="back-button"
                                src={back} 
                                alt="back arrow button to click and go bac to the home page" 
                                onClick={() => setNewsData(new EverythingNewsResponse())} 
                            />
                            <div className="back-message">Go Back</div>
                        </div>
                        <TitleStyled style={{ color : `${mainColorCheck()}`}}>{searchTitleCheck()}</TitleStyled>
                    </TitleSection>
                    <ArticlesStyled>
                        {newsData.articles.map((article, index) => {
                            articleLayout();
                            return (enlargeArticle !== index ? 

                            <ArticleSize
                                key={index} 
                                mainColor={mainColorCheck()}
                                onClick={() => {setEnlargeArticle(index)}}
                            >
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
                            </ArticleSize> :

                            <EnlargedArticle key={index} mainColor={mainColorCheck()}>
                                <img src={article.urlToImage} alt="What the article is trying to explain"/>
                                <div className="info-container">
                                    <div>
                                        <div className="title" >{article.title}</div>
                                        <div className="description">Description:<br/>{article.description}</div><br/>
                                        <div>More Info:<br/>{article.content}</div>
                                        <a className="url" href={article.url} target="_blank" rel="noreferrer">To read more click here!</a>
                                    </div>
                                    <div className="bottom-info">
                                        <div>Author: {article.author}</div>
                                        <div>From: {article.source.name}</div>
                                    </div>
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