import "../styles/copyrightSection.scss";

import indiaLogo from "../indiaLogo.png";

import { MdArrowDropDown } from "react-icons/md";

const CopyrightSection = () => {
  return (
    <div id="copyrightSection">
      <span>
        © 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and
        TV Shows are part of copyright.
      </span>
      <div>
        <img src={indiaLogo} />
        <span>India</span>
        <MdArrowDropDown className="dropdownIcon" />
      </div>
    </div>
  );
};

export default CopyrightSection;
