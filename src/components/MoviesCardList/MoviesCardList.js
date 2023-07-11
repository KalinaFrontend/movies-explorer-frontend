import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ cards, flag }) => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {cards.map((card) => (
          <MoviesCard key={card.movieId} card={card} flag={flag} />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
