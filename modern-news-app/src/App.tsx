import { IEverythingNewsResponse, EverythingNewsRequest, EverythingNewsResponse } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useEffect, useState } from 'react';

const App = () => {
  const [newsData, setNewsData] = useState<IEverythingNewsResponse>(new EverythingNewsResponse())

  useEffect(() => {
    getNewsData()
  }, [])

  const getNewsData = async () => {
    try {
      const request = new EverythingNewsRequest({q: "corona"});
      const dataObject: IEverythingNewsResponse = await fetchNewsData(request);
      setNewsData(dataObject);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="App" style={{ backgroundColor: "#22242C", color: "white", minHeight: "100vh"}}>
      <Navbar />
      <Main newsData={newsData} />
    </div>
  );
}

export default App;