import React, { useState } from "react";
import { ITodayNewsResponse } from "../models/TodayArticles";
import { MainPageTitle } from "../style/SectionTitles.style";
import Article from "./Article";
import ExpandedArticle from "./ExpandedArticle";
import { ArticlesStyled } from "./Main";

// set type for todayNewsData that will be accessed as props
interface MainProps {
  todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {
  const [enlargeArticle, setEnlargeArticle] = useState<number | null>(null)

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
      <MainPageTitle>Today News</MainPageTitle>
      <ArticlesStyled>
        {todayNewsData.status ? (
          todayNewsData.articles.map((article, i) => {
            articleLayout();
            return (enlargeArticle !== 1 ? 
              <Article 
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
          })
        ) : (
          <div>Loading...</div>
        )}
      </ArticlesStyled>
    </>
  );
};

export default TodayNews;