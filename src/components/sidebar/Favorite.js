import React, { useContext, useEffect, useRef } from "react";
import { MdFavorite } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../contextAPI/FormContext";

const FavoriteBar = () => {
  const { state, dispatch } = useContext(SearchContext);
  const countryRef = useRef([]);

  const addAnimation = (index) => {
    if (countryRef !== null) {
      console.log(countryRef.current[index]);
      countryRef.current[index].style.animation =
        "removed-item 0.5s ease-in-out";
    }
  };

  const sidebarHandler = () => {
    dispatch({ type: "CHANGE_SIDEBAR_TOGGLE" });
  };

  useEffect(() => {
    if (state.sidebarToggle) {
      document.body.classList.add("body-close");
    } else {
      document.body.classList.remove("body-close");
    }
  }, [state.sidebarToggle]);

  const removeFavorite = (id) => {
    const findIndex = state.favoriteCountries.findIndex(
      (country) => country.id === id
    );
    const filteredArray = state.favoriteCountries.filter(
      (country, index) => index !== findIndex
    );
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: filteredArray,
      });
    }, 300);
  };

  return (
    <aside id="sidebar" className={state.sidebarToggle ? "anim-bar" : null}>
      <div
        className={state.sidebarToggle ? "favoritebar anim-bar" : "favoritebar"}
      >
        <h4 className="favoritebar__header">Travel List</h4>
        <div onClick={sidebarHandler} className="favoritebar__close">
          <AiFillCloseCircle />
        </div>
        {state.favoriteCountries.length !== 0 ? (
          state.favoriteCountries.map((country, index) => {
            return (
              <div key={country.id} className="favoritebar__countries">
                <div
                  ref={(ref) => {
                    countryRef.current[index] = ref;
                  }}
                  className="favority__country"
                >
                  <div className="favority__country-flag">
                    <img
                      src={country.flag}
                      alt="flag"
                      width="250"
                      height="166"
                    />
                  </div>
                  <h4 className="favority__country-name">{country.name}</h4>
                  <a
                    target="_blank"
                    href={`/country/${country.cioc}`}
                    className="favority__country-button"
                  >
                    Go to details
                  </a>
                  <div
                    id={country.id}
                    onClick={() => {
                      removeFavorite(country.id);
                      addAnimation(index);
                    }}
                    className="aside__favorite-btn"
                  >
                    <MdFavorite />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty__list">List is empty.</div>
        )}
      </div>
    </aside>
  );
};

export default FavoriteBar;
