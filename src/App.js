import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LazyLoad from "react-lazyload";
import SpecialCountry from "./components/countrypage/SpecialCountry";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home/Home";
import ErrorPage from "./components/error/ErrorPage";
import Footer from "./components/footer/Footer";
import { CountryProvider } from "./contextAPI/FormContext";
import FavoriteBar from "./components/sidebar/Favorite";
import LocalStorage from "./localstorage/LocalStorage";

export function App() {
  return (
    <CountryProvider>
      <Router basename="/">
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LazyLoad>
                <Home />
              </LazyLoad>
            </Route>
            <Route exact path="/country/:id/">
              <LazyLoad>
                <SpecialCountry />
              </LazyLoad>
            </Route>
            <Route>
              <LazyLoad>
                <ErrorPage />
                <Redirect to="/404" />
              </LazyLoad>
            </Route>
          </Switch>
          <LazyLoad once>
            <FavoriteBar />
          </LazyLoad>
          <LazyLoad once>
            <Footer />
          </LazyLoad>
          <LocalStorage />
        </>
      </Router>
    </CountryProvider>
  );
}
