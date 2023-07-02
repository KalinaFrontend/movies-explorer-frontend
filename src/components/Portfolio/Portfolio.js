import "./Portfolio.css";
import arrow from "../../images/portfolio__link-arrow.svg";

function Portfolio() {
  return (
    <>
      <p className="portfolio__portfolio-link">Портфолио</p>
      <ul className="portfolio__navigation">
        <li>
          <a
            className="portfolio__link-container"
            href="https://kalinafrontend.github.io/How-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-name">Статичный сайт</p>
            <img className="portfolio__link-arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link-container"
            href="https://kalinafrontend.github.io/Travel-in-Russia/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <img className="portfolio__link-arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link-container"
            href="https://mesto-react-kalina.nomoredomains.monster"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <img className="portfolio__link-arrow" src={arrow} alt="стрелка" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
