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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as auth from "../../utils/auth";
import * as api from "../../utils/mainApi";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]); // пользовательские данные
  const [savedMovies, setSavedMovies] = useState([]); // список сохраненных фильмов
  const [loggedIn, setLoggedIn] = useState(false); // статус авторизации пользователя
  const [render, setRender] = useState(false); // статус получения всех данных для рендера разметки
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false); // попап информационной панели
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(null); // состояние регистрации

  //Закрать все PopUp
  const closeAllPopups = () => {
    setIsInfoTooltipOpen(false);
  };

  //Получить список сохраненных фильмов
  const handleSaveMovie = async () => {
    try {
      const data = await api.getMovies();
        setSavedMovies(data);
    } catch (e) {
      console.warn(e);

    }
  };

  //Проверить токен
  const handleTokenCheck = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setRender(true);
      return;
    }
    try {
      await handleSaveMovie();
      const userInfo = await api.getUserInfo();
      setCurrentUser(userInfo);
      setLoggedIn(true);
      setRender(true);
    } catch (e) {
      console.warn(e);
      setRender(true);
    }
  };

  //
  useEffect(() => {
    handleTokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Авторизоваться
  const handleAuthorization = async (data) => {
    try {
      const userToken = await auth.authorization(data);
      if (userToken) {
        localStorage.setItem("jwt", userToken.token);
        setLoggedIn(true);
        await handleTokenCheck();
        await handleSaveMovie();
        navigate("/movies");
      }
    } catch (e) {
      console.warn(e);
    }
  };

  //Зарегистрироваться
  const handleRegistration = async (data) => {
    try {
      await auth.registration(data);
      setIsRegistrationSuccessful(true);
      setIsInfoTooltipOpen(true);
      navigate("/signin");
    } catch (e) {
      console.warn(e);
      setIsInfoTooltipOpen(true);
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
  const handleSaveMovies = async (data) => {
    try {
      const maessage = await api.saveMovie(data);
      console.log(maessage);
      await handleSaveMovie();
    } catch (e) {
      console.warn(e);
    }
  };

  //Удалить фильм
  const handleDeleteMovies = async (data) => {
    try {
          const maessage = await api.deleteMovies(data);
          console.log(maessage);
          await handleSaveMovie();
    } catch (e) {
      console.warn(e);
    }
  };

  //Выйти из аккаунта
  const handleLoginOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("findMovies");
    localStorage.removeItem("line");
    localStorage.removeItem("checkbox");
    navigate("/");
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
                <Header auth={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/signup"
            element={<Register onLogin={handleRegistration} auth={loggedIn}/>}
          />
          <Route
            exact
            path="/signin"
            element={<Login onLogin={handleAuthorization} auth={loggedIn}/>}
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute render={render} loggedIn={loggedIn}>
                <Header auth={loggedIn} />
                <Movies
                  handleTokenCheck={handleTokenCheck}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovies}
                  onDelete={handleDeleteMovies}
                  onRender={render}
                />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute render={render} loggedIn={loggedIn}>
                <Header auth={loggedIn} />
                <SavedMovies
                  handleTokenCheck={handleTokenCheck}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovies}
                  onDelete={handleDeleteMovies}
                />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute render={render} loggedIn={loggedIn}>
                <Header auth={loggedIn} />
                <Profile
                  handleTokenCheck={handleTokenCheck}
                  updateUser={handleUpdateUserInfo}
                  onLogin={handleLoginOut}
                />
              </ProtectedRoute>
            }
          />
          <Route exact path="/*" element={<NotFindPage />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isSuccess={isRegistrationSuccessful}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
