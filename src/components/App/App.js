import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFindPage from '../NotFindPage/NotFindPage'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { initialMoviesCards } from "../../utils/initialMoviesCards";
import { savedMovies } from "../../utils/initialMoviesCards";

function App() {
  const [currentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header auth={false} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <>
                <Header auth={true} />
                <Movies cards={initialMoviesCards} />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <>
                <Header auth={true} />
                <SavedMovies cards={savedMovies} />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Header auth={true} />
                <Profile />
              </>
            }
          />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/*" element={<NotFindPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
