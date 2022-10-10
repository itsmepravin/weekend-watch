import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SearchResults = ({ searchQuery, searchResults, setSearchResults }) => {
  const searchBaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=ab2ea070f9aa3c1aa576539e31964dd5&language=en-US&query=${searchQuery}&page=1`;

  const imageBaseUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

  useEffect(() => {
    fetch(searchBaseUrl)
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results));
  }, [searchQuery]);
  return (
    <div>
      <Navbar />

      {searchQuery === "" || searchResults.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "3rem", fontSize: "2rem" }}>
          No matching search results!
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {searchResults.map((element) => (
            <img
              src={`${imageBaseUrl}/${element.poster_path}`}
              style={{ width: "178px", height: "239px", borderRadius: "6px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
