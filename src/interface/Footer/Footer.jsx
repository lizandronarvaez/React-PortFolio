import { Link } from "react-router-dom";
import Linkedin from "../../assets/linkedin.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="footer__texto">Powered by Lizandro Narvaez</h5>
      <div className="iconos">
        <Link to="https://www.linkedin.com/in/lizandro-narvaez">
          <img src={Linkedin} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
