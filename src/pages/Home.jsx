import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Movies from "../components/Movies";
import axios from "axios";
import Spinner from "../components/Spinner";

const Home = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films/");

        setMovies(data.results);
        setMoviesFiltered(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    getMovies();
  }, []);

  const searchHandle = (e) => {
    setText(e);
    if (e !== "") {
      const moviesFiltered = movies.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(e.toLowerCase());
      });
      setMoviesFiltered(moviesFiltered);
    } else {
      setMoviesFiltered(movies);
    }
  };

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <motion.div layout className="app">
      <div className="form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for a movie"
            value={text}
            onChange={(e) => searchHandle(e.target.value)}
          />
        </form>
      </div>
      <div className="movie-div">
        {moviesFiltered.map((movie) => {
          return <Movies key={movie.episode_id} movie={movie} />;
        })}
      </div>
    </motion.div>
  );
};

export default Home;
