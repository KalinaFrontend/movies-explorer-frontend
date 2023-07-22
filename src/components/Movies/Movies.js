import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from "../../utils/MoviesApi";
import { seachCards } from "../../utils/searchMovies";
import SearchError from "../SearchError/SearchError";
import SearchErrorServer from "../SearchErrorServer/SearchErrorServer";

const Movies = (props) => {
  const [movies, setMovies] = useState([]); // список сохраненных фильмов
  const [render, setRender] = useState(true); // состояние загрузки фильмов из базы
  const [notFind, setNotFind] = useState(false); // пользователь не найден
  const [requestEror, setRequestEror] = useState(false); // ошибка запроса

  useEffect(() => {
    const findMovies = JSON.parse(localStorage.getItem("findMovies"));
    if (findMovies) {
      setMovies(findMovies);
    }
  }, []);
  
  // обнуление списка фильмов
  const handleMoviesReset = ()=> {
    setMovies([]);
  }

  // поиск фильмов
  const handleSeachCards = async (line, checkbox) => {
    try {
      setRender(false);
      setRequestEror(false);
      setNotFind(false);
      const data = await moviesApi.getMovies();
      const findMovies = seachCards(data, line, checkbox);
      if (findMovies.length === 0) {
        setNotFind(true);
      } else {
        setNotFind(false);
      }
      setMovies(findMovies);
      setRender(true);
    } catch (e) {
      setRequestEror(true);
      console.warn(e);
    }
  };

  return (
      <main className="content">
        <div className="movies">
          <SearchForm onCard={handleSeachCards} onReset={handleMoviesReset}/>
          {notFind && <SearchError />}
          {requestEror && <SearchErrorServer />}
          {render ? (
            <MoviesCardList
              cards={movies}
              flag="add-favorites-btn"
              savedMovies={props.savedMovies}
              onSave={props.onSave}
              onDelete={props.onDelete}
            />
          ) : (
            <Preloader />
          )}
        </div>
      </main>
  );
};

export default Movies;
