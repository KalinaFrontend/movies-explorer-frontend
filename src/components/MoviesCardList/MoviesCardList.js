import React from "react";
import { useState, useEffect } from 'react';
import "./MoviesCardList.css";
import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";
import {
  MAX_MOVIES_1280,
  MAX_MOVIES_768,
  MAX_MOVIES_480,
  MAX_MOVIES_STEP_1280,
  MAX_MOVIES_STEP_768,
  MAX_MOVIES_STEP_480,
} from '../../utils/constants';



const MoviesCardList = ({ cards, flag, savedMovies, onSave }) => {
  const [maxMovies, setMaxMovies] = useState(0); //
  const [step, setStep] = useState(0);
  const location = useLocation();


    // обработчик кнопки Еще
    const showMoreMovies = () => {
      setMaxMovies(maxMovies + step);
    };

    // адаптивная схема расположения карточек
    const setMoviesRules = () => {
      const width = window.innerWidth;
        setMaxMovies(cards.length);
      if (width <= 480) {
        setMaxMovies(MAX_MOVIES_480);
        setStep(MAX_MOVIES_STEP_480);
      } else if (width <= 768) {
        setMaxMovies(MAX_MOVIES_768);
        setStep(MAX_MOVIES_STEP_768);
      } else {
        setMaxMovies(MAX_MOVIES_1280);
        setStep(MAX_MOVIES_STEP_1280);
      }
    };

    useEffect(() => {
      setMoviesRules();
      window.addEventListener('resize', () => {
        setTimeout(() => {
          setMoviesRules();
        }, 500);
      });
    }, []);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {cards.map((card, index) => {
            if (index < maxMovies) {
              return (
                <MoviesCard  key={card.id || card.movieId} card={card}  flag={flag}  savedMovies={savedMovies} onSave={onSave} />
              );
            }
            return null;
          })}
      </ul>
      <ScrollMoviesBtn cards={cards} maxMovies={maxMovies} onClick={showMoreMovies} />
    </section>
  );
};

export default MoviesCardList;
