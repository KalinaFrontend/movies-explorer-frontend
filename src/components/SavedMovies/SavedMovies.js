import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from "../../utils/MoviesApi";
import { seachCards } from "../../utils/searchMovies";
import { saveMovie } from "../../utils/mainApi";

const SavedMovies = ({ savedMovies, onSave, onDelete }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // состояние загрузки фильмов из базы
  const [notFind, setNotFind] = useState(false); // ошибка запроса

  const handleSeachCards = async (line, checkbox) => {
    try {
      setIsLoading(true);
      setNotFind(false);
      const findMovies = seachCards(savedMovies, line, checkbox);
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
    <main>
      <section className="saved-movies">
        <SearchForm onCard={handleSeachCards} />
        {notFind && <p className="movies_not-find">Ничего не найдено</p>}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cards={savedMovies} flag="delete-favorites-btn" savedMovies={savedMovies} onSave={onSave} onDelete={onDelete}/>
        )}
      </section>
    </main>
  );
};

export default SavedMovies;
