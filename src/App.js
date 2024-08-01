import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const microLoansMass = [
    { img: "/imgs/zaimer.png", link: "" },
    { img: "/imgs/zaimer.png", link: "" },
    { img: "/imgs/zaimer.png", link: "" },
    { img: "/imgs/zaimer.png", link: "" },
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
                  <img
                    className="microloans__item-img"
                    src="/imgs/zaimer.png"
                  />
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
