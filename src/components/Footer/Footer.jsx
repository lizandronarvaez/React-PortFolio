import { Link } from "react-router-dom";
import "./Footer.css";
import { linkedin } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <h5 className="footer__texto">Powered by Lizandro Narvaez</h5>
      <div className="iconos">
        <Link to="https://www.linkedin.com/in/lizandro-narvaez">
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
