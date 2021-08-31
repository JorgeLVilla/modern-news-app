import React from "react";
import { IEverythingNewsResponse } from "../models/Articles";

interface MainProps {
    newsData: IEverythingNewsResponse
}

const Main: React.FC<MainProps> = ({ newsData }) => {
  return (
    <>
     
      <div>
        {newsData.status ? (
          newsData.articles.map((article, index) => {
            return (
              <div key={index}>
                <img src={article.urlToImage} alt={"hi"} />
                <div>{article.title}</div>
                <div>{article.author}</div>
                <div>{article.description}</div>
                <a href={article.url} style={{ backgroundColor: "white" }}>
                  Click me to learn more!
                </a>
                <div>{article.publishedAt}</div>
                <div>{article.content}</div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Main;