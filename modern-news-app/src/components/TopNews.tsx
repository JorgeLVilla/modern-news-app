import { IEverythingNewsResponse } from "../models/Articles";

interface TopNewsProps {
    topNewsData: IEverythingNewsResponse;
}

const TopNews: React.FC<TopNewsProps> = ({ topNewsData }) => {
  return (
    <div>
      Top News
      <div className="Top-News-Container">
        {topNewsData.status ? (
          topNewsData.articles.map((article, i) => {
            return (
              <div key={i}>
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
        ;
      </div>
    </div>
  );
};

export default TopNews;