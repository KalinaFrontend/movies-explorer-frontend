import React from "react";
import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";
import {
  MAX_MOVIES_1280,
  MAX_MOVIES_768,
  MAX_MOVIES_480,
  MAX_MOVIES_STEP_1280,
  MAX_MOVIES_STEP_768,
  MAX_MOVIES_STEP_480,
} from "../../utils/constants";

const MoviesCardList = ({ cards, flag, savedMovies, onSave, onDelete }) => {
  const [maxMovies, setMaxMovies] = useState(0); //
  const [step, setStep] = useState(0);
  const [rerender, setRerender] = useState(); // состояние рендера страницы


  // обработчик кнопки Еще
  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  // адаптивная схема расположения карточек
  const setMoviesRules = (count) => {
    setMaxMovies(cards.length);
    if (count === 1) {
      setMaxMovies(MAX_MOVIES_480);
      setStep(MAX_MOVIES_STEP_480);
    } else if (count === 2) {
      setMaxMovies(MAX_MOVIES_768);
      setStep(MAX_MOVIES_STEP_768);
    } else {
      setMaxMovies(MAX_MOVIES_1280);
      setStep(MAX_MOVIES_STEP_1280);
    }
  };

  // посчитать первоначальное количество карточек в ряд
  useEffect(() => {
      setTimeout(() => {
        const count = Array.from(document.querySelectorAll(".movies-card__card"))
        .reduce(
          (acc, { offsetTop: n }) => (
            acc[acc.length - 1]?.[0] === n || acc.push([n, 0]),
            acc[acc.length - 1][1]++,
            acc
          ),
          []
        )
        .map((n) => n[1]);
        setMoviesRules(count[0]);
      }, 10);
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  // повесить слушатель изменения колличества карточек в ряд
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const count = Array.from(document.querySelectorAll(".movies-card__card"))
        .reduce(
          (acc, { offsetTop: n }) => (
            acc[acc.length - 1]?.[0] === n || acc.push([n, 0]),
            acc[acc.length - 1][1]++,
            acc
          ),
          []
        )
        .map((n) => n[1]);
        setMoviesRules(count[0]);
      }, 500);
    });
    setRerender(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {cards.map((card, index) => {
          if (index < maxMovies) {
            return (
              <MoviesCard
                key={card.id || card.movieId}
                card={card}
                flag={flag}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
              />
            );
          }
          return null;
        })}
      </ul>
      <ScrollMoviesBtn
        cards={cards}
        maxMovies={maxMovies}
        onClick={showMoreMovies}
      />
    </section>
  );
};

export default MoviesCardList;
