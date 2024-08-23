import { useEffect, useState } from "react";
import "./App.css";
import microLoansMassRU from "./microLoansMassRU.json";

const tg = window.Telegram.WebApp;

function App() {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [microLoansMass, setMicroLoansMass] = useState(microLoansMassRU);

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  // const getGeoInfo = async () => {
  //   try {
  //     const response = await fetch("https://ipapi.co/json/");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setCountry(data.country_code);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getGeoInfo();
  //   if (country) {
  //     console.log(country);

  //     switch (country) {
  //       case "RU":
  //         setMicroLoansMass(microLoansMassRU);
  //         break;
  //       case "KZ":
  //         setMicroLoansMass(microLoansMassKZ);
  //         break;
  //       case "UA":
  //         setMicroLoansMass(microLoansMassUA);
  //         break;
  //       default:
  //         setMicroLoansMass(microLoansMassRU);
  //         break;
  //     }

  //     tg.ready();
  //   }
  // }, [country]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="App">
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
                  target="_blank"
                  rel="noreferrer"
                >
                  {`Получить до ${microloan.price}`}
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
