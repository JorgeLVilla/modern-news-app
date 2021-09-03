import React, { useState } from "react";
import { IEverythingNewsResponse } from "../models/Articles";
import styled from "styled-components";
import { SectionContainer } from "../style/Wrappers.style";
import { EnlargedArticle } from "./Main";
import {
  OneArticle,
  OneHalfArticle,
  OneThirdArticle,
} from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";
import { ArticlesStyled } from "./Main";


interface TopNewsProps {
  topNewsData: IEverythingNewsResponse;
}

const TopNews: React.FC<TopNewsProps> = ({ topNewsData }) => {
  const [enlargeArticle, setEnlargeArticle] = useState<number | null>(null)
  
  let ArticleSize = OneThirdArticle;
  let articleIndex = 0;

  // Func to set they layout as repeating with a 3-1-2 article pattern
  const articleLayout = (): void => {
    if (articleIndex === 0) {
      articleIndex++;
      ArticleSize = OneArticle;
    } else {
      articleIndex++;
      ArticleSize = OneThirdArticle;
    }
  };

  return (
    <>
      <MainPageTitle>Top News</MainPageTitle>
        {topNewsData.status ? (
          <ArticlesStyled>
          {topNewsData.articles.map((article, i) => {
            articleLayout();
            return (enlargeArticle !== i ? 
                <ArticleSize
                    key={i} 
                    onClick={() => {setEnlargeArticle(i)}}
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

                <EnlargedArticle key={i} mainColor={"white"}>
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
                </EnlargedArticle>
            );
          })}
          </ArticlesStyled>
        ) : (
          <div>Loading...</div>
        )}
    </>
  );
};

export default TopNews;
