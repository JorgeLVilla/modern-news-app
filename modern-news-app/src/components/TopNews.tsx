import React from "react";
import { IEverythingNewsResponse } from "../models/Articles";
import { MainPageTitle } from "../style/SectionTitles.style";
import Article from "./Article";
import ExpandedArticle from "./ExpandedArticle";
import { ArticlesStyled } from "./Main";


interface TopNewsProps {
  topNewsData: IEverythingNewsResponse;
  enlargeArticle: string | null;
  setEnlargeArticle: Function;
}

const TopNews: React.FC<TopNewsProps> = ({ topNewsData, enlargeArticle, setEnlargeArticle }) => {
  
  let ArticleSize = 3;
  let articleIndex = 0;
  let mainColorCheck = "white";

  // Func to set they layout as repeating with a 3-1-2 article pattern
  const articleLayout = (): void => {
    if (articleIndex === 0) {
      articleIndex++;
      ArticleSize = 1;
    } else {
      articleIndex++;
      ArticleSize = 3;
    }
  };

  return (
    <>
      <MainPageTitle>Top News</MainPageTitle>
        {topNewsData.status ? (
          <ArticlesStyled>
          {topNewsData.articles.map((article, i) => {
            articleLayout();
            return (enlargeArticle !== `top-${i}` ? 
              <Article 
              section="top"
                  index={i} 
                  mainColorCheck={mainColorCheck} 
                  setEnlargeArticle={setEnlargeArticle} 
                  article={article} 
                  ArticleSize={ArticleSize}
              /> :
              <ExpandedArticle 
                  article={article} 
                  index={i} 
                  mainColorCheck={mainColorCheck} 
                  setEnlargeArticle={setEnlargeArticle}
              />)
          })}
          </ArticlesStyled>
        ) : (
          <div>Loading...</div>
        )}
    </>
  );
};

export default TopNews;
