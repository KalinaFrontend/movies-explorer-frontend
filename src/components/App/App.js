import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { initialMoviesCards } from '../../utils/initialMoviesCards'

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route exact path="/" element={
            <><Header auth={false} /><Main /><Footer /></>} 
          />
          <Route exact path="/movies" element={
            <><Header auth={true} />
            <Movies cards={initialMoviesCards} />
            <Footer /></>} 
          />
            <Route exact path="/saved-movies" element={
            <><Header auth={true} />
            <SavedMovies cards={initialMoviesCards} />
            <Footer /></>} 
          />         
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
