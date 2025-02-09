import React, { useEffect, useState } from "react";

/* INSTRUCTION: import the getDogs function from the utils/api.js file */
import { getDogs } from "../../utils/api";

function Dogs(props) {
  /* INSTRUCTION: create a state variable called dogs and set it to an empty array */
  const [dogs, setDogs] = useState([]);

  /* INSTRUCTION: create a state variable called size and set it to an empty string */
  const [size, setSize] = useState("");

  /* INSTRUCTION: create a useEffect hook that fetches the dogs from the back-end server using the getDogs function */
  useEffect(() => {
    getDogs(size).then((data) => {
      setDogs(data);
    });
  }, [size]);

  /* STUDENT ADDITION: create a function called handleFilterChange to update the state of size and trigger the useEffect to update the dog list according to the size chosen */
  const handleFilterChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <h2>Dogs</h2>

      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}
        <select value={size} onChange={handleFilterChange}>
          <option value={""}>All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
      <table>
        <thead>
          <tr>
            <td>
              <strong>Breed</strong>
            </td>
            <td>
              <strong>Size</strong>
            </td>
            <td>
              <strong>Age</strong>
            </td>
            <td>
              <strong>Adoption Fee</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {dogs.length > 0 ? (
            dogs.map((dog) => (
              <tr key={dog.id}>
                <td>{dog.breed}</td>
                <td>{dog.size}</td>
                <td>{dog.age}</td>
                <td>${dog.adoptionFee}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No Dogs Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dogs;
