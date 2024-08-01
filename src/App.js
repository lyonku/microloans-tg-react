import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const microLoansMass = [
    {
      img: "https://assets.plurapp.com/lgs/srochno-dengi.png",
      link: "https://affpipe.click/tFLMzhqP",
    },
    {
      img: "https://assets.plurapp.com/lgs/webzaim-logo.png",
      link: "https://affpipe.click/P75L457H",
    },
    {
      img: "https://assets.plurapp.com/lgs/webbankir-logo.jpg",
      link: "https://affpipe.click/MDDXV43y",
    },
    {
      img: "https://assets.plurapp.com/lgs/turbozaim.jpg",
      link: "https://affpipe.click/1QkFfnNG",
    },
    {
      img: "https://assets.plurapp.com/lgs/ekapusta-logo.png",
      link: "https://affpipe.click/7BrjgwwH",
    },
    {
      img: "https://assets.plurapp.com/lgs/bistrodengi-logo.png",
      link: "https://affpipe.click/4tB8fhwF",
    },
    {
      img: "https://assets.plurapp.com/lgs/lime.png",
      link: "https://affpipe.click/YJv2HQF9",
    },
    {
      img: "https://assets.plurapp.com/lgs/one_click_money.png",
      link: "https://affpipe.click/5syJLszR",
    },
  ];

  return (
    <div className="App">
      {/* <header className="header">
        <img src="/imgs/SmartMoneyLogo.png" />
        <h2>Умные деньги</h2>
      </header> */}
      <main className="main">
        <h1 className="main__title">Доступные предложения</h1>
        <ul className="microloans__list">
          {microLoansMass.map((microloan, index) => {
            return (
              <li className="microloans__item" key={index}>
                <div className="microloans__item-header">
                  <img className="microloans__item-img" src={microloan.img} />
                  <div className="microloans__item_chance">
                    <div className="microloans__item_chance-wrap">
                      <p className="microloans__item_chance-title">Высокий</p>
                      <p className="microloans__item_chance-text">
                        шанс одобрения
                      </p>
                    </div>
                    <img
                      className="microloans__item_chance-img"
                      src="/imgs/highChance.svg"
                    />
                  </div>
                </div>
                <a
                  href={microloan.link}
                  className="SolidBtn microloans__item-btn"
                >
                  Получить займ
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
