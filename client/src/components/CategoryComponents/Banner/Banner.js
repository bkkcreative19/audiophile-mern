import React from "react";

import Nav from "../../Nav/Nav";

const Banner = ({ name }) => {
  return (
    <section className="banner">
      <Nav />
      <h1>{name}</h1>
    </section>
  );
};

export default Banner;
