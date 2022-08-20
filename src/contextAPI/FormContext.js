import React, { createContext, useReducer } from "react";

export const SearchContext = createContext();

const SearchState = {
  countries: [],
  error: false,
  favoriteCountries: [],
  sidebarToggle: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      return {
        ...state,
        countries: action.payload,
        error: false,
      };
    case "NOT_FOUND":
      return {
        ...state,
        countries: [],
        error: true,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteCountries: action.payload,
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteCountries: action.payload,
      };
    case "CHANGE_SIDEBAR_TOGGLE":
      return {
        ...state,
        sidebarToggle: !state.sidebarToggle,
      };
  }
};

export const CountryProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, SearchState);
  const value = { state, dispatch };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};
