import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";

const Movies = ({ cards }) => {
  

  return (
    <main className="content">
      <div className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} flag="add-favorites-btn" />
        <ScrollMoviesBtn cards={cards} />
      </div>
    </main>
  );
};

export default Movies;
