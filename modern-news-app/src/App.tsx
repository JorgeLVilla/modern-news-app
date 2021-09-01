// interface classes
import { IEverythingNewsResponse, EverythingNewsRequest, EverythingNewsResponse } from './models/Articles';
import { ITopNewsResponse } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import { fetchTodayNewsData } from './util/fetchApi';
import { ITodayNewsResponse, TodayNewsRequest, TodayNewsResponse } from './models/TodayArticles';

// components 
import TodayNews from './components/TodayNews';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TopNews from './components/TopNews';
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse())
  const [topNewsData, setTopNewsData] = useState<ITopNewsResponse>(new EverythingNewsResponse())
  const [todayNewsData, setTodayNewsData] = useState<ITodayNewsResponse>(new TodayNewsResponse());

  // news data call for top section of home page

  useEffect(() => {
    getTodayNewsData();
    getTopNewsData("top-headlines");
  }, [])

  const getNewsData = async (search: string) => {
    try {
      const request = new EverythingNewsRequest({q: search});
      const dataObject: IEverythingNewsResponse = await fetchNewsData(request);
      setNewsData(dataObject);
      console.log(dataObject)
    } catch (error) {
      console.error(error)
    }
  }

  const getTopNewsData = async (search: string) => {
    try {
      const request = new EverythingNewsRequest({q: search});
      const dataObject: ITopNewsResponse = await fetchNewsData(request);
      setTopNewsData(dataObject);
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
    <div className="App" style={{ backgroundColor: "#22242C", color: "white", minHeight: "100vh"}}>
      <Navbar getNewsData={getNewsData} />
      {newsData.status ?
      <Main newsData={newsData} /> :
      <>
        <TopNews topNewsData={topNewsData} />
        <TodayNews todayNewsData={todayNewsData}/>
      </>
      }
    </div>
  );
}

export default App;