import "../styles/contactSection.scss";
import bottomLogo from "../Group-17273.png";
import { GoLocation } from "react-icons/go";
const ContactSection = () => {
  return (
    <div id="contactSection">
      <div>
        <img src={bottomLogo} />
        <div style={{ display: "flex", gap: 6 }}>
          <GoLocation style={{ fontSize: "1.5rem" }} />
          <div>
            <p>
              24, Vaishnavi Centre, Raja Park,
              <br /> 51, Dhanana, Panipat, <br /> Haryana, Pincode-154419
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="contactHeading">The Basics</p>
        <p>About Weekend Watch</p>
        <p>Contact Us</p>
        <p>Support</p>
        <p>API</p>
      </div>

      <div>
        <p className="contactHeading">Get Involved</p>
        <p>Contribution Guideline</p>
        <p>Add New Movie</p>
        <p>Add New TV Show</p>
        <p>&#160;</p>
      </div>

      <div>
        <p className="contactHeading">Community</p>
        <p>Guidelines</p>
        <p>Discussions</p>
        <p>Leaderboards</p>
        <p>Twitter</p>
      </div>

      <div>
        <p className="contactHeading">Legal</p>
        <p>Terms of use</p>
        <p>API Terms of use</p>
        <p>Privacy Policy</p>
        <p>&#160;</p>
      </div>
    </div>
  );
};

export default ContactSection;
