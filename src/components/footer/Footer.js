import React from "react";
import { AiFillGithub, AiFillApi } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a target="_blank" href="https://github.com/BerkayAkgurgen">
              <AiFillGithub />
              <span>Goes to Github!</span>
            </a>
          </li>
          <li className="footer__list-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/berkay-akgurgen/"
            >
              <ImLinkedin />
              <span>Goes to Linkedin!</span>
            </a>
          </li>
          <li className="footer__list-item">
            <a target="_blank" href="https://restcountries.eu/">
              <AiFillApi />
              <span>Goes to API reference!</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
