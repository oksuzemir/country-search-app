import React, { useState, useEffect, useContext } from "react";
import LazyLoad from "react-lazyload";
import { MdFavorite } from "react-icons/md";
import DefCountries from "../../../defcountryarray/DefCountries";
import { SearchContext } from "../../../contextAPI/FormContext";

const DefaultCard = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const { state, dispatch } = useContext(SearchContext);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => window.removeEventListener("resize", setWindowWidth);
  }, [windowWidth]);

  const favoriteHandler = (name, flag, cioc, id) => {
    const countryInfos = [{ name, flag, cioc, id }];
    if (state.favoriteCountries.length === 0) {
      dispatch({
        type: "ADD_FAVORITE",
        payload: state.favoriteCountries.concat(countryInfos),
      });
    }
    const sameCountry = state.favoriteCountries.findIndex(
      (country) => id === country.id
    );
    if (sameCountry === -1) {
      dispatch({
        type: "ADD_FAVORITE",
        payload: state.favoriteCountries.concat(countryInfos),
      });
    } else {
      console.log("Default: ", sameCountry);
      const filteredArray = state.favoriteCountries.filter(
        (country, index) => index !== sameCountry
      );
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: filteredArray,
      });
    }
  };

  return (
    <main id="main" className="def__countries">
      <div className="container">
        <header className="def__header">
          <h3 className="popular">Popular Countries</h3>
        </header>
        <div className="dp-cards">
          {DefCountries.map((country) => {
            return (
              <div
                key={country.numericCode}
                className="countries__card card"
                key={country.name}
              >
                <div className="card__flag">
                  <LazyLoad
                    height={windowWidth >= 614 ? "210px" : '173px"'}
                    once
                  >
                    <img
                      width={windowWidth >= 614 ? "320px" : "100%"}
                      height={windowWidth >= 614 ? "210px" : '100%"'}
                      src={country.flag}
                      alt="flag"
                    />
                  </LazyLoad>
                </div>
                <div className="card__body">
                  <div className="card__body-name">
                    <h5>{country.name}</h5>
                  </div>
                  <div className="card__body-infos">
                    <span className="country-capital">
                      Capital: {country.capital}
                    </span>
                    <span className="country-region">
                      Region: {country.region}
                    </span>
                  </div>
                </div>
                <a
                  target="_blank"
                  href={`#/country/${country.cioc}`}
                >
                  <footer className="card__footer">
                    <p>Go to detailed information.</p>
                  </footer>
                </a>
                <div
                  title="Add Favorite"
                  id={country.numericCode}
                  onClick={() =>
                    favoriteHandler(
                      country.name,
                      country.flag,
                      country.cioc,
                      country.numericCode
                    )
                  }
                  className={
                    "favorite-btn" +
                    state.favoriteCountries
                      .map((favCountry) => {
                        if (favCountry.id === country.numericCode) {
                          return " added";
                        }
                      })
                      .join(" ")
                  }
                >
                  <MdFavorite />
                  <span>Add To Travel List</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DefaultCard;
