import React from "react";

const CountryNotFound = () => {
  return (
    <div className="error-page d-center">
      <div className="error-info">
        <h1>404</h1>
        <p>Oops! This Country not found.</p>
      </div>
      <div className="error-button">
        <a className="button" href="/">
          Go back in initial page, is better.
        </a>
      </div>
    </div>
  );
};

export default CountryNotFound;