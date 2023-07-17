import React from "react";
import { useState, useEffect } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ card, flag, savedMovies, onSave }) => {
  const [saveMovie, setSaveMovie] = useState(false);

  useEffect(() => {
    if (savedMovies) {
      savedMovies.forEach((movies) => {
        if (movies.movieId === card.id) {
          setSaveMovie(true);
        }
      });
    }
  }, []);

  const handleSaveMovie = () => {
    if (!saveMovie && flag === "add-favorites-btn") {
      console.log(card);
      onSave(card);
      return setSaveMovie(true);
    }
    return setSaveMovie(false);
  };

  return (
    <li className="movies-card__card">
      <div className="movies-card__info">
        <div className="movies-card__info-container">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__time">{`${Math.floor(
            card.duration / 60
          )}ч ${card.duration % 60}м`}</p>
        </div>
        <button
          className={`movies-card__add-favorites-btn movies-card__add-favorites-btn_${
            saveMovie ? "active" : ""
          }`}
          onClick={handleSaveMovie}
          type="button"
        ></button>
      </div>
      <a
        href={card.trailerLink}
        className="movies-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
    </li>
  );
};

//      <button className={`movies-card__add-favorites-btn movies-card__add-favorites-btn_${saveMovie ? "active" : ""}`} onClick={handleSaveMovie} type="button"></button>

export default MoviesCard;
