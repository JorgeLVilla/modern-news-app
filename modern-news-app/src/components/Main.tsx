import React from "react";
import styled from "styled-components";
import { IEverythingNewsResponse } from "../models/Articles";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style"

interface MainProps {
    newsData: IEverythingNewsResponse
}

const MainStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

    return(
        <MainStyled>
            {newsData.status ? (
                newsData.articles.map((article, index) => {
                    articleLayout()
                    return <ArticleSize key={index}>
                        <img src={article.urlToImage} alt="What the article is trying to explain"/>
                        <div className="info-container">
                            <a className="title" href={article.url}>{article.title}</a>
                            <div>{article.author}</div>
                        </div>
                    </ArticleSize>
                })
            ) : <div>Loading...</div>}
        </MainStyled>
    )
}

export default Main;