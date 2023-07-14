import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";

const Movies = (props) => {
  const [seachCards, setSeachcards] = useState(null);
/*
  useEffect(() => {
    handleSeachCards();
  }, []);
*/
  const handleSeachCards = (line) => {
    line.toLowerCase();
    const findCard = [];
    props.cards.forEach((item) => {
      if (item.nameRU.toLowerCase().includes(line) || item.nameEN.toLowerCase().includes(line)) {
        findCard.push(item);
      }
    });
    setSeachcards(findCard);
    console.log(findCard);
  };

  return (
    <main className="content">
      <div className="movies">
        <SearchForm onCard={handleSeachCards}/>
        <MoviesCardList
          cards={seachCards ? seachCards : props.cards}
          flag="add-favorites-btn"
        />
        <ScrollMoviesBtn cards={props.cards} />
      </div>
    </main>
  );
};

export default Movies;
