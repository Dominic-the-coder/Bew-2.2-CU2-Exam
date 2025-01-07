import React, { useEffect, useState } from "react";
import { getSmallAnimal } from "../../utils/api";
/* INSTRUCTION: import the getSmallAnimals function from the utils/api.js file */

function SmallAnimals() {
  /* INSTRUCTION: create a state variable called smallAnimals and set it to an empty array */

  const [smallAnimals, setSmallAnimals] = useState([]);

  /* INSTRUCTION: create a state variable called search and set it to an empty string */

  const [search, setSearch] = useState([]);

  /* INSTRUCTION: create a useEffect hook that fetches the small animals from the back-end server using the getSmallAnimals function */

  useEffect(() => {
    if (type == "All") {
      getSmallAnimals(search).then((smallAnimalData) => {
        setSmallAnimals(smallAnimalData);
      });
    } else {
      getSmallAnimals(search).then((smallAnimalData) => {
        setSmallAnimals(smallAnimalData);
      });
    }
  }, [search]);

  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch.target.value);
  };

  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}

        <div>
          <input value={search} onChange={handleSearchChange}></input>
        </div>

      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
    </div>
  );
}

export default SmallAnimals;
