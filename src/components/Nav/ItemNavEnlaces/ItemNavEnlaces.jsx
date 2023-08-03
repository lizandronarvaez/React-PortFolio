/* eslint-disable react/prop-types */
import home from "../../../assets/icon-home.svg"
import skills from "../../../assets/skills.svg"
import projects from "../../../assets/projects.svg"
import contact from "../../../assets/contacto.svg"
import "./ItemNavEnlaces.css"
import { NavLink } from "react-router-dom";

const ItemNavEnlaces = ({ isActive }) => {

    return (
        <div className={`navegacion__enlaces ${isActive ? " mostrar__enlaces" : ""}`}>

            {/* INICIO */}
            <NavLink
                className="navegacion__enlace"
                to="/"
            >
                <img src={home} alt="home" />
                Inicio
            </NavLink>
            {/* SKILLS */}
            <NavLink
                className="navegacion__enlace"
                to="skills"
            >
                <img src={skills} alt="skills" />
                Skills
            </NavLink>
            {/* PROYECTOS */}
            <NavLink
                className="navegacion__enlace"
                to="proyectos"
            >
                <img src={projects} alt="proyectos" />
                Proyectos
            </NavLink>
            {/* CONTACTO */}
            <NavLink
                className="navegacion__enlace"
                to="contacto"
            >
                <img src={contact} alt="contacto" />
                Contacto
            </NavLink>

        </div>
    )
}

export default ItemNavEnlaces