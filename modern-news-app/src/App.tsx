import { fetchNewsData } from './util/fetchApi';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([])
  
  const getData = async(search: string) => {
    let data = await fetchNewsData(search)
    setData(data.articles)
  }

  return (
    <div className="App">
      <button onClick={() => getData("bitcoin")}>Click me :)</button>
      {console.log(data)}
    </div>
  );
}

export default App;