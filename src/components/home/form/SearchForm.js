import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { SearchContext } from "../../../contextAPI/FormContext";

const SearchForm = () => {
  const [inputText, setText] = useState("");
  const [selected, setSelected] = useState("name");
  const { dispatch } = useContext(SearchContext);

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetchCountries(inputText);
    clearInput();
  };

  const clearInput = () => {
    const input = document.querySelector(".search__form-input");
    input.value = "";
  };

  const selectHandler = (e) => {
    setSelected(e.target.value);
    dispatch({ type: "SEARCH_COUNTRY", payload: [] });
  };

  const fetchCountries = async (name) => {
    try {
      switch (selected) {
        case "name":
          const responseName = await axios.get(
            `https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;region;alpha2Code;numericCode;flag;`
          );
          const countryName = responseName.data;
          dispatch({ type: "SEARCH_COUNTRY", payload: countryName });
          break;
        case "region":
          const responseRegion = await axios.get(
            `https://restcountries.eu/rest/v2/region/${name}?fields=name;capital;region;alpha2Code;numericCode;flag;`
          );
          const countryRegion = responseRegion.data;
          dispatch({ type: "SEARCH_COUNTRY", payload: countryRegion });
      }
    } catch (err) {
      dispatch({ type: "NOT_FOUND" });
    }
  };

  return (
    <div className="section__search search">
      <form className="search__form" onSubmit={submitForm}>
        <input
          tabIndex="1"
          type="text"
          className="search__form-input"
          placeholder={
            selected === "name"
              ? "e.g Turkey, Germany..."
              : "e.g Asian, Europe..."
          }
          onChange={inputHandler}
        />
        <button
          type="submit"
          aria-label="search"
          className="search__form-button"
        >
          <BiSearchAlt />
        </button>
      </form>
      <div className="search__filter filter">
        <select
          tabIndex="2"
          name="filter-search"
          className="filter-search"
          onChange={selectHandler}
        >
          <option defaultValue value="name">
            Name
          </option>
          <option value="region">Region</option>
        </select>
      </div>
    </div>
  );
};

export default SearchForm;
