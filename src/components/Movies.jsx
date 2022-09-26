import React from "react";
import { motion } from "framer-motion";
import logo from "../asset/img/Star_Wars_Logo.png";

import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

  const { url, title, release_date } = movie;

  const splitUrl = url.split("/")[5];

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      layout
      className="movies-grid"
    >
      <Link to={`/movie/${splitUrl}`}>
        <img className="img" src={logo} alt="Star Wars Logo" />
        <h4>
          <span>Title :</span> {title}
        </h4>
        <p>
          <span>Date :</span> {release_date}
        </p>
      </Link>
    </motion.div>
  );
};

export default Movie;
