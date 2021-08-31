// interface classes
import { IEverythingNewsResponse, EverythingNewsRequest, EverythingNewsResponse } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import { fetchTodayNewsData } from './util/fetchApi';
import { ITodayNewsResponse, TodayNewsRequest, TodayNewsResponse } from './models/TodayArticles';

// components 
import TodayNews from './components/TodayNews';
import Navbar from './components/Navbar';
import Main from './components/Main';

// react
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse());
  const [todayNewsData, setTodayNewsData] = useState<ITodayNewsResponse>(new TodayNewsResponse());

  useEffect(() => {
    getTodayNewsData();
  }, []);

  // news data call for top section of home page

  const getNewsData = async (search: string) => {
    try {
      const request = new EverythingNewsRequest({q: search});
      const dataObject: IEverythingNewsResponse = await fetchNewsData(request);
      setNewsData(dataObject);
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
      <Main newsData={newsData} />
      <TodayNews todayNewsData={todayNewsData}/>
    </div>
  );
}

export default App;