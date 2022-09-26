import React, { useEffect } from "react";

const FilterButton = ({ setFiltered, characters, setGender, gender }) => {
  
  useEffect(() => {
    if (gender === "male") {
      const filteredMale = characters.filter((movie) => movie.gender === gender);
      setFiltered(filteredMale);
      return;
    } else if (gender === "female") {
      const filteredFemale = characters.filter((movie) => movie.gender === gender);
      setFiltered(filteredFemale);
      return;
    }
    return setFiltered(characters);
  }, [gender]);

  return (
    <div className="filter_btn">
      <button
        className={gender === "" ? "active" : ""}
        onClick={() => setGender("")}
      >
        All
      </button>
      <button
        className={gender === "male" ? "active" : ""}
        onClick={() => setGender("male")}
      >
        male
      </button>
      <button
        className={gender === "female" ? "active" : ""}
        onClick={() => setGender("female")}
      >
        female
      </button>
    </div>
  );
};

export default FilterButton;
