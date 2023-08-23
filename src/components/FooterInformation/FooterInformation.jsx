import { Link } from "react-router-dom"
import Linkedin from "../../assets/linkedin.svg"
import "./FooterInformation.css"

const FooterInformation = () => {
    return (
        <div className="footer">
            <div className="iconos">
                <Link
                    to="https://www.linkedin.com/in/lizandro-narvaez"
                >
                    <img src={Linkedin} alt="linkedin" />
                    <p>Linkedin</p>
                </Link>
            </div>
            <p className="footer__texto">Powered by Lizandro Narvaez</p>
        </div>
    )
}

export default FooterInformation