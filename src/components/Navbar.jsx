import "../styles/navbar.scss";

import { BiSearchAlt2 } from "react-icons/bi";

import navbarLogo from "../Union-625@2x.png";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbarContainer">
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img src={navbarLogo} />
      </div>

      <div className="linksContainer">
        <div>
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Log In</li>
            <li>Join Us</li>
            <BiSearchAlt2 className="searchIcon" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
