import React, { useState } from "react";
import { IEverythingNewsResponse } from "../models/Articles";
import styled from "styled-components";
import { ArticlesStyled } from "./Main";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";

interface TopNewsProps {
    topNewsData: IEverythingNewsResponse;
}

const NewsSectionTitle = styled.div `
    font-size: 5em;
    padding-left: 1.5em;
`

const TopNews: React.FC<TopNewsProps> = ({ topNewsData }) => {
    
    const [enlargeArticle, setEnlargeArticle] = useState<number | null>(null)

    let ArticleSize = OneThirdArticle
    let articleIndex = 0

    // Func to set they layout as repeating with a 3-1-2 article pattern
    const articleLayout = ():void => {
        if(articleIndex === 4){
            articleIndex++
            ArticleSize = OneArticle
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

    return (
        <div>
            <MainPageTitle>
                Top News
            </MainPageTitle>
            <ArticlesStyled>
                {topNewsData.status ?
                    topNewsData.articles.map((article, i) => {
                        articleLayout();
                        return (

                            <ArticleSize key={i}>
                                <img src={article.urlToImage} alt={"hi"} />
                                <div className="info-container">
                                    <div>{article.title}</div>
                                    <div>{article.author}</div>
                                    <div>{article.content}</div>
                                </div>
                            </ArticleSize>
                        )
                    }) : <div>Loading...</div>};
            </ArticlesStyled>
        </div>
    )
}

export default TopNews;