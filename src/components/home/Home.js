import React from "react";
import Hero from "./hero/Hero";
import FormSection from "./form/FormSection";
import CountryCards from "./card/CountryCards";
import LazyLoad from "react-lazyload";

function Home() {
  return (
    <div className="Home">
      <LazyLoad once>
        <Hero />
      </LazyLoad>
      <LazyLoad once>
        <FormSection />
      </LazyLoad>
      <LazyLoad once>
        <CountryCards />
      </LazyLoad>
    </div>
  );
}

export default Home;
