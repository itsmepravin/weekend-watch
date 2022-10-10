import "../../styles/popularSection/popularItemsSection.scss";

import { ImSpinner3 } from "react-icons/im";

import Ratings from "./Ratings";

import { convertDate } from "../../utils/helpers";

const PopularItemsSection = ({ isLoading, popularItems }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

  return (
    <div id="popularItemsSection">
      {isLoading ? (
        <div className="loadingContainer">
          <ImSpinner3 className="loadingIcon" />
          <h3>Loading.........</h3>
        </div>
      ) : (
        popularItems.map((element) => (
          <div style={{ height: "24rem" }}>
            <img src={`${baseUrl}/${element.poster_path}`} />
            <p>{element.title || element.name}</p>
            <p>
              {convertDate(element["release_date"], element["first_air_date"])}
            </p>
            <Ratings vote={element["vote_average"]} />
          </div>
        ))
      )}
    </div>
  );
};

export default PopularItemsSection;
