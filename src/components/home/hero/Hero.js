import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div
        style={{
          backgroundImage: `url("https://www.linkpicture.com/q/blue-banner-minify.png")`,
        }}
        className="hero__bg-image"
      >
        <div className="context">
          <h2 className="hero__header">SEARCH THE WORLD!</h2>
          <p className="hero__context">
            You can get the most up-to-date information about all countries
            around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
