import { useState, useEffect } from "react";
import "./styles/styles.scss";

import ImageSlider from "./components/ImageSlider";

import Navbar from "./components/Navbar";
import PopularSection from "./components/PopularSection/PopularSection";
import ContactSection from "./components/ContactSection";
import CopyrightSection from "./components/CopyrightSection";

import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
  const [popular, setPopular] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState("movie");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const renderMovies = popular.filter(
    (element) => element["media_type"] === "movie"
  );
  const renderTVShows = popular.filter(
    (element) => element["media_type"] === "tv"
  );

  const heroCarouselItems = popular
    .filter((element) => element["vote_average"] >= 7)
    .slice(0, 6);

  const popularItems = selectedBadge === "movie" ? renderMovies : renderTVShows;

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5&page=1"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <ImageSlider
              slides={heroCarouselItems}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <PopularSection
              isLoading={isLoading}
              popularItems={popularItems}
              setSelectedBadge={setSelectedBadge}
              setIsLoading={setIsLoading}
            />
            <ContactSection />
            <CopyrightSection />
          </>
        }
      />
      <Route
        path={"/search"}
        element={
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchQuery={searchQuery}
          />
        }
      />
    </Routes>
  );
}

export default App;
