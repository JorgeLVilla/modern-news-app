import React, { useState } from "react";
import { SectionContainer } from "../style/Wrappers.style";
import { ITodayNewsResponse } from "../models/TodayArticles";
import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import { MainPageTitle } from "../style/SectionTitles.style";
import { ArticlesStyled, EnlargedArticle } from "./Main";
import noimageavailable from "../assets/noimageavailable.jpg";

// set type for todayNewsData that will be accessed as props
interface MainProps {
  todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {
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
      <MainPageTitle>Today News</MainPageTitle>
      <ArticlesStyled>
        {todayNewsData.status ? (
          todayNewsData.articles.map((article, i) => {
            articleLayout();
            return (enlargeArticle !== i ? 
                <ArticleSize
                    key={i} 
                    onClick={() => {setEnlargeArticle(i)}}
                >
                    <div className="img-block">
                    <img src={article.urlToImage? article.urlToImage : noimageavailable} alt={article.description}/>
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
                    <img src={article.urlToImage? article.urlToImage : noimageavailable} alt={article.description}/>
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
            )
          })
        ) : (
          <div>Loading...</div>
        )}
      </ArticlesStyled>
    </>
  );
};

export default TodayNews;
