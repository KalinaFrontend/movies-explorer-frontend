import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";

const SavedMovies = ({ cards }) => {


  return (
    <main>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList cards={cards} flag="delete-favorites-btn" />
        <ScrollMoviesBtn cards={cards} />
      </section>
    </main>
  );
};

export default SavedMovies;
