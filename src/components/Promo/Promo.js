import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
  return (
    <section className='promo'>
      <h2 className='promo__title'>Учебный проект студента факультета <br/> Веб-разработки.</h2>
      <NavTab />
    </section>
  );
}

export default Promo;