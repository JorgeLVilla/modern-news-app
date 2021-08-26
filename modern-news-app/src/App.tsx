import './App.css';
import { fetchNewsData } from './util/fetchApi';
import { fetchTodayNewsData } from './util/fetchApi';
import { EverythingNewsRequest } from './models/Articles';
import { TodayNewsRequest } from './models/RecentArticles';

//components
import TodayNews from './components/TodayNews';

function App() {

  // // news data call for top section of home page
  const getNewsData = async () => {
    try {
      const request = new EverythingNewsRequest({q: "apple"});
      const dataObject = await fetchNewsData(request);
      console.log(dataObject);
      return dataObject;
    } catch (error) {
      
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
    <div className="App">
      
      <TodayNews />
    </div>
  );
}

export default App;
