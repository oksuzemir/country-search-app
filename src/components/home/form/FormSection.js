import React from "react";
import SearchForm from "./SearchForm";

const FormSection = () => {
  return (
    <div id="form-section" className="form__section section">
      <div className="container">
        <div className="form__section-header">
          <h3 className="form-header">
            {animateElement} Let's Search Everywhere
          </h3>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default FormSection;

const animateElement = (
  <span className="breakword">
    <span>H</span>
    <span>e</span>
    <span>r</span>
    <span>e</span>
    &nbsp;
    <span>W</span>
    <span>e</span>
    &nbsp;
    <span>G</span>
    <span>o</span>
    <span>!</span>
  </span>
);
