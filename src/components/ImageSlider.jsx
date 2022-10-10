import { useState } from "react";

import "../styles/imageSlider.scss";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const ImageSlider = ({ slides, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || length <= 0) return null;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  const baseUrl = "https://image.tmdb.org/t/p/w1280";

  const handleInputChange = (e) => setSearchQuery(e.target.value);

  return (
    <section className="slider">
      {/* Removed Because I was informed it was not consistent with UI */}
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} /> */}
      {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
      {slides.map((element, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              src={`${baseUrl}/${element.backdrop_path}`}
              className="image"
            />
          )}
        </div>
      ))}
      <div id="heroContent">
        <h1>Welcome to the weekend watch</h1>
        <h3>Millions of movies, TV Shows and many more</h3>
        <div id="inputSearch">
          <input
            id="searchInput"
            type="text"
            placeholder="Search for movies, tv shows and persons"
            onChange={(event) => handleInputChange(event)}
          />
          <button onClick={() => navigate("/search")}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
