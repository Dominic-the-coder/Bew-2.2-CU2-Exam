import React, { useEffect, useState } from "react";
import { getCats } from "../../utils/api";
/* INSTRUCTION: import the getCats function from the utils/api.js file */

function Cats() {
  /* INSTRUCTION: create a state variable called cats and set it to an empty array */

  const [cats, setCats] = useState([]);

  /* INSTRUCTION: create a state variable called sort and set it to an empty string */

  const [sort, setSort] = useState([]);

  /* INSTRUCTION: create a state variable called page and set it to 1 */

  const [page, setPage] = useState(1);

  /* INSTRUCTION: create a state variable called limit and set it to 5 */

  const [limit, setLimit] = useState(5);

  /* INSTRUCTION: create a useEffect hook that fetches the cats from the back-end server using the getCats function */

  useEffect(() => {
    getCats(sort, page, limit).then((data) => {
      setCats(data);
    });
  }, [sort, page, limit]);

  /* STUDENT ADDITION: create a function called handleFilterChange to update the state of sort and trigger the useEffect to update the cat list according to the sort option chosen */
  const handleFilterChange = (e) => {
    setSort(e.target.value);
  };

  /* STUDENT ADDITION: create a function called handleLimitChange to update the state of limit, triggering the useEffect to update the cat list according to the limit chosen and revert back the page number to 1 */
  const handleLimitChange = (e) => {
    setPage(1);
    setLimit(e.target.value);
  };

  return (
    <div>
      <h2>Cats</h2>
      <div className="filters">
        <label htmlFor="sort">Sort by:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to sort the cats by breed or rating */}
        <select value={sort} onChange={handleFilterChange}>
          <option value={""}>None</option>
          <option value="breed">Breed</option>
          <option value="rating">Rating</option>
        </select>

        <label htmlFor="limit">Per Page:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to limit the number of cats per page */}
        <select value={limit} onChange={handleLimitChange}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
        </select>
      </div>
      {/* INSTRUCTION: create a table that displays the cats. The table should have the following columns: Breed, Coat Length, and Rating. If there are no cats, display a message saying "No cats found." */}
      <table>
        <thead>
          <tr>
            <td>
              <strong>Breed</strong>
            </td>
            <td>
              <strong>Coat Length</strong>
            </td>
            <td>
              <strong>Rating</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {cats.length > 0 ? (
            cats.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.breed}</td>
                <td>{cat.coatLength}</td>
                <td>{cat.rating}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No cats found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* INSTRUCTION: create a pagination controls that allows the user to navigate through the cats */}
      <div className="pagination">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <button
          disabled={cats.length === 0 ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Cats;
