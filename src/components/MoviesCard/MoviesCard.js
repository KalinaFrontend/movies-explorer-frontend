import React from "react";
import { useState, useEffect } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ card, flag, savedMovies, onSave, onDelete }) => {
  const [saveMovie, setSaveMovie] = useState(false);
  const [saveMovieId, setSaveMovieId] = useState(null);
  const [render, setRender] = useState(false); // состояние загрузки фильмов из базы

  useEffect(() => {
    if (savedMovies) {
      savedMovies.forEach((movies) => {
        if (movies.movieId === card.id || movies.id === card.id) {
          setSaveMovieId(movies._id);
          setSaveMovie(true);
        }
      });
    }
    setRender(true);
  }, [savedMovies]);

  const handleSaveMovie = async () => {
    if (!saveMovie && flag === "add-favorites-btn") {
      try {
        await onSave(card);
        return setSaveMovie(true);
      } catch (e) {
        console.warn(e);
        return setSaveMovie(false);
      }
    }
    try {
      if (card._id) {
        await onDelete(card._id);
        return setSaveMovie(false);
      }
      await onDelete(saveMovieId);
      return setSaveMovie(false);
    } catch (e) {
      console.warn(e);
      return setSaveMovie(true);
    }
  };

  return (
    render && (
      <li className="movies-card__card">
        <div className="movies-card__info">
          <div className="movies-card__info-container">
            <h2 className="movies-card__title">{card.nameRU}</h2>
            <p className="movies-card__time">{`${Math.floor(
              card.duration / 60
            )}ч ${card.duration % 60}м`}</p>
          </div>
          <button
            className={`movies-card__${flag} movies-card__${flag}_${
              saveMovie ? "active" : ""
            }`}
            onClick={handleSaveMovie}
            type="button"
          ></button>
        </div>
        <a
          href={card.trailerLink ? card.trailerLink : card.trailer
          }
          className="movies-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="movies-card__image"
            src={
              card.image.url
                ? `https://api.nomoreparties.co/${card.image.url}`
                : card.image
            }
            alt={card.nameRU}
          />
        </a>
      </li>
    )
  );
};

export default MoviesCard;
