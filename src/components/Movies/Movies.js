import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from "../../utils/MoviesApi";
import { seachCards } from "../../utils/searchMovies";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // состояние загрузки фильмов из базы
  const [notFind, setNotFind] = useState(false); // ошибка запроса

  /*

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setMovies(savedMovies);
    /*
    if (savedMovies.length === 0) {
      setIsLoading(true);
      const data = handleInitialMoviesCards();
      console.log(data);
      };
*/
  /*
      const data = props.getMovies;
      console.log(data);
          if (data) {
            localStorage.setItem('savedMovies', JSON.stringify(movies));
          }
          setIsLoading(false);
          

  }, []);
*/
  const handleSeachCards = async (line, checkbox) => {
    try {
      setIsLoading(true);
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
      console.warn(e);
    }
  };

  return (
    <main className="content">
      <div className="movies">
        <SearchForm onCard={handleSeachCards} />
        {notFind && <p className="movies_not-find">Ничего не найдено</p>}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cards={movies} flag="add-favorites-btn"  savedMovies={props.savedMovies} onSave={props.onSave} />
        )}
      </div>
    </main>
  );
};

export default Movies;
