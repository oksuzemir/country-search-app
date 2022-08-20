import React, { useContext, useEffect } from "react";
import { SearchContext } from "../contextAPI/FormContext";

function LocalStorageEvents() {
  const { state, dispatch } = useContext(SearchContext);
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("countries")) || [];
    dispatch({ type: "ADD_FAVORITE", payload: localTodos });
  }, []);

  useEffect(() => {
    if (state.favoriteCountries) {
      localStorage.setItem(
        "countries",
        JSON.stringify(state.favoriteCountries || [])
      );
    }
  }, [state]);
  return <></>;
}

export default LocalStorageEvents;
