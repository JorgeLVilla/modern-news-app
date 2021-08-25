import './App.css';
import { fetchNewsData } from './util/fetchApi';
import { EverythingNewsRequest } from './models/Articles';

function App() {

  const getNewsData = async () => {
    try {
      const request = new EverythingNewsRequest({q: "corona"});
      const dataObject = await fetchNewsData(request);
      return dataObject;
    } catch (error) {
      
    }
  }

  getNewsData();
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
