import { IEverythingNewsResponse, EverythingNewsRequest, EverythingNewsResponse } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import { fetchTodayNewsData } from './util/fetchApi';
import { TodayNewsRequest } from './models/RecentArticles';

//components
import TodayNews from './components/TodayNews';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse())

  useEffect(() => {
    getNewsData()
  }, [])

  // // news data call for top section of home page
  const getNewsData = async () => {
    try {
      const request = new EverythingNewsRequest({q: "corona"});
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
      const dataObject = await fetchTodayNewsData(request);
      console.log(dataObject);
      return dataObject;

    } catch (error) {
        console.error(error);
    }
}

getTodayNewsData();

  // getNewsData();

  return (
    <div className="App" style={{ backgroundColor: "#22242C", color: "white", minHeight: "100vh"}}>
      <Navbar />
      <Main newsData={newsData} />
      <TodayNews />
    </div>
  );
}

export default App;