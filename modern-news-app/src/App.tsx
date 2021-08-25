import React from 'react';
import logo from './logo.svg';
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
      hi
    </div>
  );
}

export default App;
