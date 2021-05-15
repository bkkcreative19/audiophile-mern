import React from "react";
import PropTypes from "prop-types";

const Banner = ({ name }) => {
  return (
    <section className="banner">
      <h1>{name}</h1>
    </section>
  );
};

Banner.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Banner;
