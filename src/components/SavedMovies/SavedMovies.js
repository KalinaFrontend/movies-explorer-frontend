import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { seachCards } from "../../utils/searchMovies";
import SearchError from "../SearchError/SearchError";
import SearchErrorServer from "../SearchErrorServer/SearchErrorServer";

const SavedMovies = ({ savedMovies, onSave, onDelete }) => {
  const [movies, setMovies] = useState([]); // сохранение фильмов для поиска
  const [isLoading, setIsLoading] = useState(false); // состояние загрузки фильмов из базы
  const [notFind, setNotFind] = useState(false); // пользователь не найден
  const [requestEror, setRequestEror] = useState(false); // ошибка запроса 

  useEffect(()=> {
    setMovies(savedMovies);
  }, [savedMovies])

  const handleSeachCards = async (line, checkbox) => {
    try {
      setIsLoading(true);
      setRequestEror(false);
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
      setRequestEror(true);
      console.warn(e);
    }
  };


  return (
    <main className="content">
      <section className="saved-movies">
        <SearchForm onCard={handleSeachCards} tag="saved-movies"/>
        {notFind && <SearchError />}
        {requestEror && <SearchErrorServer />}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cards={movies} flag="delete-favorites-btn" savedMovies={savedMovies} onSave={onSave} onDelete={onDelete}/>
        )}
      </section>
    </main>
  );
};

export default SavedMovies;
