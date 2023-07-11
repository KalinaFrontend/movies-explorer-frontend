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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { initialMoviesCards } from "../../utils/initialMoviesCards";
import { savedMovies } from "../../utils/initialMoviesCards";

function App() {

  const navigate = useNavigate();
  const [currentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  //Проверить токен
  const handleTokenCheck = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    try {
//      const userInfo = await api.getUserInfo();
//      setUserData(userInfo.user.email);
      navigate("/");
    } catch(e) {
      console.warn(e);
    }
  }

  /*function handleAuthorization(data) {
    auth
      .authorization(data)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          handleTokenCheck();
        }
      })
      .catch(console.error);
  }
*/
  const handleAuthorization = async(data) => {
    try {
      const userToken = await  auth.authorization(data);
      if(userToken) {
        localStorage.getItem("jwt", userToken.token);
        setLoggedIn(true);
        handleTokenCheck();
      }
    } catch(e) {
      console.warn(e);
    }
  }

    //Зарегистрироваться
    const handleRegistration = async (data) => {
      try {
          await auth.registration(data);
          navigate("/signin");
      } catch (e) {
          console.warn(e);
      }
  }


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
          <Route exact path="/signup" element={<Register onLogin={handleRegistration}/>} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/*" element={<NotFindPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
