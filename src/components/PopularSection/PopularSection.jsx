import PopularHeadingSection from "./PopularHeadingSection";
import PopularItemsSection from "./PopularItemsSection";
import PopularNav from "./PopularNav";

const PopularSection = ({
  isLoading,
  popularItems,
  setSelectedBadge,
  setIsLoading,
}) => {
  return (
    <div id="popularSection" style={{ position: "relative" }}>
      <PopularHeadingSection
        setSelectedBadge={setSelectedBadge}
        setIsLoading={setIsLoading}
      />
      <PopularItemsSection isLoading={isLoading} popularItems={popularItems} />
      <PopularNav />
    </div>
  );
};

export default PopularSection;
