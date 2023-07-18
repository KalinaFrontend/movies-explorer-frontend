import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from "../../utils/MoviesApi";
import { seachCards } from "../../utils/searchMovies";
import SearchError from "../SearchError/SearchError";
import SearchErrorServer from "../SearchErrorServer/SearchErrorServer";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // состояние загрузки фильмов из базы
  const [notFind, setNotFind] = useState(false); // пользователь не найден
  const [requestEror, setRequestEror] = useState(false); // ошибка запроса

  const handleSeachCards = async (line, checkbox) => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    } catch (e) {
      setRequestEror(true);
      console.warn(e);
    }
  };

  return (
    <main className="content">
      <div className="movies">
        <SearchForm onCard={handleSeachCards} />
        {notFind && <SearchError />}
        {requestEror && <SearchErrorServer />}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cards={movies} flag="add-favorites-btn"  savedMovies={props.savedMovies} onSave={props.onSave} onDelete={props.onDelete} />
        )}
      </div>
    </main>
  );
};

export default Movies;
