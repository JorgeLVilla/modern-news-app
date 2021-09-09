// interface classes
import { IEverythingNewsResponse, EverythingNewsRequest, EverythingNewsResponse } from './models/Articles';
import { TopNewsRequest, ITopNewsResponse, TopNewsResponse } from './models/TopNewsArticles';
import { fetchNewsData, fetchTodayNewsData, fetchTopNewsData } from './util/fetchApi';
import { BodyContainer } from "./style/Wrappers.style";
import { ITodayNewsResponse, TodayNewsRequest, TodayNewsResponse } from './models/TodayArticles';

// components 
import TodayNews from './components/TodayNews';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TopNews from './components/TopNews';
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse())
  const [topNewsData, setTopNewsData] = useState<ITopNewsResponse>(new TopNewsResponse())
  const [todayNewsData, setTodayNewsData] = useState<ITodayNewsResponse>(new TodayNewsResponse());
  const [enlargeArticle, setEnlargeArticle] = useState<string | null>(null)

  // news data call for top section of home page

  useEffect(() => {
    getTodayNewsData();
    getTopNewsData("top-headlines");
  }, [])

  const getNewsData = async (search: string) => {
    try {
      const request = new EverythingNewsRequest({q: search, pageSize: 18});
      const dataObject: IEverythingNewsResponse = await fetchNewsData(request);
      setNewsData(dataObject);
    } catch (error) {
      console.error(error)
    }
  }

  const getTopNewsData = async (search: string) => {
    try {
      const request = new TopNewsRequest({q: search, sources: "time"});
      const dataObject: ITopNewsResponse = await fetchTopNewsData(request);
      setTopNewsData(dataObject);
      return dataObject;
      
    } catch (error) {
      console.error(error)
    }
  }

  // news data call for recent news section
  const getTodayNewsData = async () => {
    try {
      const request = new TodayNewsRequest();
      const dataObject: ITodayNewsResponse = await fetchTodayNewsData(request);
      setTodayNewsData(dataObject);
      return dataObject;

    } catch (error) {
        console.error(error);
    }
}

  return (
    <div style={{ 
      backgroundColor: "#22242C", 
      color: "white", 
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
      }}>
      <Navbar 
        setEnlargeArticle={setEnlargeArticle}
        getNewsData={getNewsData}
        setNewsData={setNewsData}
      />
      {newsData.status ?
      <Main 
        enlargeArticle={enlargeArticle}
        setEnlargeArticle={setEnlargeArticle}
        newsData={newsData}
        setNewsData={setNewsData}
        /> :
      <BodyContainer>
        <TopNews 
          topNewsData={topNewsData} 
          enlargeArticle={enlargeArticle}
          setEnlargeArticle={setEnlargeArticle}
        />
        <TodayNews 
          todayNewsData={todayNewsData} 
          enlargeArticle={enlargeArticle}
          setEnlargeArticle={setEnlargeArticle}
        />
      </BodyContainer>
      }
    </div>
  );
}

export default App;