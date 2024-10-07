import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './locale/i18n.js';
import { ThemeProvider } from './context/ThemeProvider';
import { UserProvider } from './context/UserProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.js';
import FavoriteShows from './pages/FavoriteShows.js';
import Genres from './pages/Genres.js';
import Show from './pages/Show.js';
import { showsTool } from './utilities/showsUtilities.js';

function App() {

  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const handleChangeLanguage = (lang, theme) => {
    const newLanguage = currentLanguage !== lang ? lang : currentLanguage;
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    theme.lang = newLanguage;
  }

  const [shows, setShows] = useState([]);
  const [showsShort, setShowsShort] = useState([]);

  async function fetchShowsAsync(){
    try {
        const response = await fetch('/dimosthenis_tv_shows.json');
        const json = await response.json();

        setShows(json);
        setShowsShort(showsTool(json, "SHORT_LIST"));

    } catch(err) {
        console.error(err);
    }
  }

  useEffect(() => {
    fetchShowsAsync()
  }, []);

  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <Sidebar t={t}></Sidebar>
          <main className="h-screen flex grow flex-col">
            <Header t={t} handleChangeLanguage={handleChangeLanguage} showsShort={showsShort}></Header>
            <section>
              <Routes>
                <Route path="/" element={<Home t={t} shows={shows} />}></Route>
                <Route path="/favorites" element={<FavoriteShows t={t} shows={shows} />}></Route>
                <Route path="/genres" element={<Genres t={t} shows={shows} />}></Route>
                <Route path="/show/:showId" action={({ params }) => {}} element={<Show t={t} shows={shows} />}></Route>
              </Routes>
            </section>
            <Footer></Footer>
          </main>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
