import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getDogs function from the utils/api.js file */
import { getDogs } from "./utils/api";

function Dogs() {
  /* INSTRUCTION: create a state variable called dogs and set it to an empty array */

  const [dogs, setDogs] = useState([]);

  /* INSTRUCTION: create a state variable called size and set it to an empty string */

  const [size, setSize] = useState([]);

  /* INSTRUCTION: create a useEffect hook that fetches the dogs from the back-end server using the getDogs function */

  useEffect(() => {
    if (type == "All") {
      getDogs(search).then((dogData) => {
        setDogs(dogData);
      });
    } else {
      getDogs(search, type).then((dogData) => {
        setDogs(dogData);
      });
    }
  }, [search, type]);

  return (
    <div>
      <h2>Dogs</h2>

      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}

        <div>
          <select onChange={onTypeChange}>
            <option>All</option>
            {types.map((type) => (
              <option>{type}</option>
            ))}
          </select>
        </div>
        
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
    </div>
  );
}

export default Dogs;
