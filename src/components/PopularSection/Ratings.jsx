import { TiStar, TiStarHalf } from "react-icons/ti";

const Ratings = ({ vote }) => {
  let roundedVote = Math.round(vote / 2);
  return (
    <div className="ratings">
      <p>
        {[...Array(roundedVote)].map((element) => (
          <TiStar className="starIcon" />
        ))}
      </p>
      {vote - roundedVote * 2 > 0.4 ? (
        <TiStarHalf className="starIcon" />
      ) : null}
    </div>
  );
};

export default Ratings;
