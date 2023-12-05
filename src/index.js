import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Questions from './pages/Questions';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
//import App from './App';
//import reportWebVitals from './reportWebVitals.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  return (

    <div className='App'>
      <nav>
        <ul style={{display: 'flex', listStyle: 'none'}}>
          <li><a href="/" style={{marginRight: '20px'}}>Home</a></li>
          <li><a href="/quiz" style={{marginRight: '20px'}}>Quiz</a></li>
          <li><a href="/questions" style={{marginRight: '20px'}}>Quiz Questions</a></li>
          <li><a href="/contact" style={{marginRight: '20px'}}>Contact Us!</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="quiz" element={<Quiz />}/>
            <Route path="questions" element={<Questions />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

root.render(<App />);

//reportWebVitals();