import React, { useState, useRef, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { SearchContext } from "../../contextAPI/FormContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { state, dispatch } = useContext(SearchContext);
  const navbarRef = useRef(null);
  const [active, setActive] = useState(false);

  const sidebarHandler = () => {
    dispatch({ type: "CHANGE_SIDEBAR_TOGGLE" });
  };

  const closeOverlay = () => {
    dispatch({ type: "CHANGE_SIDEBAR_TOGGLE" });
  };

  const mobileToggle = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const onScroll = (e) => {
    if (window.scrollY === 0) {
      navbarRef.current.className = "topbar";
    } else {
      navbarRef.current.className = "topbar scroll";
    }
  };

  return (
    <div ref={navbarRef} className="topbar">
      <div className="d-between container">
        <div className="topbar__desktop d-between">
          <div className="topbar__brand brand">
            <Link to="/" className="brand__link">
              <LazyLoad height={50} once>
                <img
                  width="50px"
                  height="35px"
                  src="https://www.linkpicture.com/q/favicon_19.png"
                  alt="icon"
                />
              </LazyLoad>
              <span className="brand-name">Q-TRAVEL</span>
            </Link>
          </div>
          <nav className="topbar__nav nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link to="/" className="brand__link">
                  Home
                </Link>
              </li>
              <li className="nav__list-item">
                <a onClick={sidebarHandler} className="brand__link">
                  Travel List
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  href="https://github.com/BerkayAkgurgen/SearchCountriesApp"
                  target="_blank"
                  className="brand__link"
                >
                  Visit on GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          onClick={mobileToggle}
          className={
            active
              ? "topbar__toggle d-center active"
              : "topbar__toggle d-center"
          }
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <>
          <LazyLoad>
            <MobileMenu active={active} setActive={setActive} />
          </LazyLoad>
        </>
      </div>
      <div
        className={state.sidebarToggle ? "overlay anim-overlay" : "overlay"}
        onClick={closeOverlay}
      ></div>
    </div>
  );
};

export default Navbar;
