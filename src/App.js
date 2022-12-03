import React from 'react';
import RandomQuote from './components/RandomQuote';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Quotes from './components/Quotes';
import './index.css';

const API_URL_RND = 'https://zenquotes.io/api/random'

function App() {

  const navigate = useNavigate();

  const navigateQuotes = () => {
    navigate('src/components/Quotes.js');
  };

  const navigateRandomQuote = () => {
    navigate('src/components/RandomQuote.js');
  };

  const makeApiCall = async (quotes) => {
    const response1 = await fetch(`${API_URL_RND}`);
    const data1 = await response1.json();
    getRandomQuote(data1);
  }

  function getRandomQuote(data) {
    var bn = document.getElementById('btn--random-quotes');
    if (typeof bn === 'undefined' || typeof data === 'undefined') return;
    document.getElementsByTagName('h1')[0].innerText = data[0].q;
    document.getElementsByTagName('h3')[0].innerText = data[0].a;
  }

  return (
    <div className="App">
      <div className='btnContainer'>
        <button id='btn--quotes' onClick={navigateQuotes}>Go to Quotes</button>
        <button id='btn--random-quotes' onClick={() => { navigateRandomQuote(); makeApiCall() }}>New Random Quote</button>
      </div>

      <Routes>
        <Route path="src/components/RandomQuote.js" element={<RandomQuote />} />
        <Route path="src/components/Quotes.js" element={<Quotes />} />
        <Route path="*" element={<Quotes />} />
      </Routes>
    </div>
  );
}
export default App;
