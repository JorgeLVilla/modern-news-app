import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchNewsData } from './util/fetchApi';

function App() {
  console.log(fetchNewsData("bitcoin"))
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
