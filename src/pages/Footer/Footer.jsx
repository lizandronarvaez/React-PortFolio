import "./Footer.css"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import FormContact from "../../components/FormContact/FormContact"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer >
            <FormContact />
            <div className="footer">
                <div className="iconos">
                    <NavLink to={"https://github.com/lizandronarvaez"} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                        <img src={Github} alt="github" />
                        <p>GitHub</p>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/lizandro-narvaez" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                        <img src={Linkedin} alt="linkedin" />
                        <p>Linkedin</p>
                    </NavLink>
                </div>
                <p className="footer__texto">PortFolio realizado por Lizandro Narvaez</p>
            </div>

        </footer>
    )
}

export default Footer