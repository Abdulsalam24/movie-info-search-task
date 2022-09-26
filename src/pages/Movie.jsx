import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import FilterButton from "../components/FilterButton";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";

function Movie() {
  const { id } = useParams();
  const { movieData, char, isLoading, isError } = useFetch(id);

  const [filtered, setFiltered] = useState(null);
  const [characters, setCharacters] = useState();
  const [height, setHeight] = useState();
  const [sorted, setSorted] = useState(false);
  const [gender, setGender] = useState("");

  useEffect(() => {
    setFiltered(char);
    setCharacters(char);
  }, [char]);

  useEffect(() => {
    if (char.length > 0) {
      const heightSum =
        filtered &&
        filtered.map((char) => Number(char.height)).reduce((a, b) => a + b);
      setHeight(heightSum);
    }
  }, [filtered]);

  const handleSort = () => {
    if (!sorted) {
      const sortedFilter = filtered.sort((s1, s2) => {
        if (s1.name < s2.name) {
          return -1;
        }
        return 1;
      });
      setFiltered(sortedFilter);
      setSorted(true);
    } else {
      const sortedFilter = filtered.sort((s1, s2) => {
        if (s1.name > s2.name) {
          return -1;
        }
        return 1;
      });
      setFiltered(sortedFilter);
      setSorted(false);
    }
  };

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <motion.div layout className="characters container">
      <BackButton url="/" />

      <h1> Title: {movieData.title}</h1>

      <FilterButton
        setFiltered={setFiltered}
        characters={characters}
        filtered={filtered}
        gender={gender}
        setGender={setGender}
      />

      <div className="table-div overflow-x-auto" key={char.id}>
        <table className="table w-full">
          <thead onClick={handleSort}>
            <tr>
              <th>Charcaters</th>
              <th>Gender</th>
              <th>Height</th>
            </tr>
          </thead>

          {filtered &&
            filtered.map((char) => (
              <tbody key={char.name} className="bg-white">
                <tr>
                  <td>{char.name}</td>
                  <td>{char.gender}</td>
                  <td>{!char.height ? "none" : char.height}</td>
                </tr>
              </tbody>
            ))}

          <thead>
            <tr>
              <th>Total </th>
              <th>number {filtered.length}</th>
              <th>
                height : <br /> {height ? height : 0} cm (5ft/6.93in)
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </motion.div>
  );
}

export default Movie;
