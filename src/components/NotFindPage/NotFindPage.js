import React from "react";
import "./NotFindPage.css";

function NotFindPage() {
  return (
    <main>
      <section className="not-find-page">
        <h1 className="not-find-page__title">404</h1>
        <p className="not-find-page__text">Страница не найдена</p>
        <a className="not-find-page__link" href="/signin">
          Назад
        </a>
      </section>
    </main>
  );
}

export default NotFindPage;
