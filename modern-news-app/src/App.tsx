import { EverythingNewsRequest } from './models/Articles';
import { fetchNewsData } from './util/fetchApi';
import Navbar from './components/Navbar';

const App = () => {
  const getNewsData = async () => {
    try {
      const request = new EverythingNewsRequest({q: "corona"});
      const dataObject = await fetchNewsData(request);
      return dataObject;
    } catch (error) {
      console.error(error)
    }
  }

  getNewsData();

  return (
    <div className="App" style={{ backgroundColor: "#22242C", color: "white", minHeight: "100vh"}}>
      <Navbar />
    </div>
  );
}

export default App;