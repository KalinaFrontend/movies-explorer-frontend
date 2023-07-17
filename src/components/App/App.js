import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFindPage from "../NotFindPage/NotFindPage";
import * as auth from "../../utils/auth";
import * as api from "../../utils/mainApi";
import * as movies from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleTokenCheck();
    handleSaveMovie();
  }, []);

  //Получить список сохраненных фильмов
  const handleSaveMovie = async () => {
    try {
      const data = await api.getMovies();
      setSavedMovies(data);
      console.log(data);
    } catch (e) {
      console.warn(e);
    }
  };

  //Проверить токен
  const handleTokenCheck = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    try {
      const userInfo = await api.getUserInfo();
      setCurrentUser(userInfo);
    } catch (e) {
      console.warn(e);
    }
  };

  //Авторизоваться
  const handleAuthorization = async (data) => {
    try {
      const userToken = await auth.authorization(data);
      if (userToken) {
        localStorage.setItem("jwt", userToken.token);
        setLoggedIn(true);
        handleTokenCheck();
      }
    } catch (e) {
      console.warn(e);
    }
  };

  //Зарегистрироваться
  const handleRegistration = async (data) => {
    try {
      await auth.registration(data);
      navigate("/signin");
    } catch (e) {
      console.warn(e);
    }
  };

  //Обновить данные пользователя
  const handleUpdateUserInfo = async (data) => {
    try {
      if (!data.name)
        data = {
          ...data,
          name: currentUser.name,
        };
      if (!data.email)
        data = {
          ...data,
          email: currentUser.email,
        };
      const userData = await api.updateUserInfo(data);
      setCurrentUser(userData);
    } catch (e) {
      console.warn(e);
    }
  };

   //Сохранить фильм
   const handleSaveMovies= async (data) => {
    console.log(data);
    try {
      console.log(savedMovies.includes(data.nameRU));
      const maessage = await api.saveMovie(data);
      console.log(maessage);
      await handleSaveMovie();
    } catch (e) {
      console.warn(e);
    }
  };

     //Удалить фильм
     const handleDeleteMovies= async (data) => {
      try {
        const maessage = await api.deleteMovies(data);
        console.log(maessage);
        await handleSaveMovie();
      } catch (e) {
        console.warn(e);
      }
    };

   

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
                <Movies  savedMovies={savedMovies} onSave={handleSaveMovies} onDelete={handleDeleteMovies}/>
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
                <SavedMovies savedMovies={savedMovies} onSave={handleSaveMovies} onDelete={handleDeleteMovies} />
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
                <Profile updateUser={handleUpdateUserInfo} />
              </>
            }
          />
          <Route
            exact
            path="/signup"
            element={<Register onLogin={handleRegistration} />}
          />
          <Route
            exact
            path="/signin"
            element={<Login onLogin={handleAuthorization} />}
          />
          <Route exact path="/*" element={<NotFindPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
