import React from "react";
import "./SearchErrorServer.css";

function SearchErrorServer() {
  return (
    <p className="search-error-server_not-find">
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз
    </p>
  );
}

export default SearchErrorServer;
