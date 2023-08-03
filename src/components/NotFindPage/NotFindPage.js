import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFindPage.css";

function NotFindPage() {

  const navigate = useNavigate();
 


  return (
    <main>
      <section className="not-find-page">
        <h1 className="not-find-page__title">404</h1>
        <p className="not-find-page__text">Страница не найдена</p>
        <a className="not-find-page__link">
          <button className="not-find-page__link-button" type="button" onClick={()=> navigate(-1)}>
            Назад
          </button>
        </a>
      </section>
    </main>
  );
}

export default NotFindPage;
