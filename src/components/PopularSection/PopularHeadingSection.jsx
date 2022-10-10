import "../../styles/popularSection/popularHeadingSection.scss";

const PopularHeadingSection = ({ setSelectedBadge, setIsLoading }) => {
  const handleStreamingBadgeClick = () => {
    document.querySelector(".badgeBackdrop").classList.remove("after");

    document.querySelector(".badgeBackdrop").classList.add("initial");
    document.getElementById("streamingBadge").style.color = "white";
    document.getElementById("onTVBadge").style.color = "black";
    setSelectedBadge("movie");
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleOnTVBadgeClick = () => {
    document.querySelector(".badgeBackdrop").classList.remove("initial");

    document.querySelector(".badgeBackdrop").classList.add("after");
    document.getElementById("onTVBadge").style.color = "white";
    document.getElementById("streamingBadge").style.color = "black";
    setSelectedBadge("tv");
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div id="popularHeadingSection">
      <h3>What's Popular</h3>
      <div id="popularBadges">
        <span id="streamingBadge" onClick={handleStreamingBadgeClick}>
          Streaming
        </span>
        <span id="onTVBadge" onClick={handleOnTVBadgeClick}>
          TV
        </span>
        <span className="badgeBackdrop initial">&#160;</span>
      </div>
    </div>
  );
};

export default PopularHeadingSection;
