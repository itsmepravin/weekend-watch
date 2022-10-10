import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

import "../../styles/popularSection/popularNav.scss";

import { handleLeftIconPress, handleRightIconPress } from "../../utils/helpers";

const PopularNav = () => {
  return (
    <>
      <div
        id="leftNavIcon"
        className="navIconContainer left"
        onClick={handleLeftIconPress}
      >
        <BsFillCaretLeftFill className="navIcon" />
      </div>

      <div
        id="rightNavIcon"
        className="navIconContainer right"
        onClick={handleRightIconPress}
      >
        <BsFillCaretRightFill className="navIcon" />
      </div>
    </>
  );
};

export default PopularNav;
