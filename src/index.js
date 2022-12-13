
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './assets/index.css'

import Page from './pages/Page/Page';
import Post from './pages/Post/Post';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Page/>} />
            <Route path="/raw" element={<Page/>} />
            <Route path="/dub" element={<Page/>} />
            <Route path="/movies" element={<Page/>} />
            <Route path="/season" element={<Page/>} />
            <Route path="/popular" element={<Page/>} />
            <Route path="/ongoing" element={<Page/>} />
            <Route path="/watch/:slug" element={<Post/>} />
            <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);