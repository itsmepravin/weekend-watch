export const handleLeftIconPress = () => {
  document.getElementById("popularItemsSection").scrollLeft -= 190;
};

export const handleRightIconPress = () => {
  document.getElementById("popularItemsSection").scrollLeft += 190;
};

export const convertDate = (releaseDate, firstAirDate) => {
  if (releaseDate) {
    const convertedDate = new Date(releaseDate).toDateString().substring(3);
    return (
      convertedDate.substring(0, 7) +
      "," +
      convertedDate.substring(7, convertedDate.length)
    );
  } else {
    const convertedDate = new Date(firstAirDate).toDateString().substring(3);
    return (
      convertedDate.substring(0, 7) +
      "," +
      convertedDate.substring(7, convertedDate.length)
    );
  }
};
