import { IEverythingNewsResponse, NewsRequest, EverythingNewsResponse } from './models/Articles';
import { ITopNewsResponse, TopNewsResponse } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TopNews from './components/TopNews';
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse())
  const [topNewsData, setTopNewsData] = useState<ITopNewsResponse>(new TopNewsResponse())

  useEffect(() => {
    getNewsData("bitcoin")
  }, [])

  useEffect(() => {
    getTopNewsData("top-headlines")
  }, [])

  const getNewsData = async (search: string) => {
    try {
      const request = new NewsRequest({q: search});
      const dataObject: IEverythingNewsResponse = await fetchNewsData(request);
      setNewsData(dataObject);
    } catch (error) {
      console.error(error)
    }
  }

  const getTopNewsData = async (search: string) => {
    try {
      const request = new NewsRequest({q: search});
      const dataObject: ITopNewsResponse = await fetchNewsData(request);
      setTopNewsData(dataObject);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="App" style={{ backgroundColor: "#22242C", color: "white", minHeight: "100vh"}}>
      <Navbar getNewsData={getNewsData} />
      <TopNews topNewsData={topNewsData} />
      <Main newsData={newsData} />
    </div>
  );
}

export default App;