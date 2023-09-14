/* eslint-disable react/prop-types */
import home from "../../../assets/icon-home.svg"
import skills from "../../../assets/skills.svg"
import projects from "../../../assets/projects.svg"
import contact from "../../../assets/contacto.svg"
import "./ItemNavEnlaces.css"
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

const ItemNavEnlaces = ({ isActive }) => {
    const myref = useRef();

    const onRemoveClass = () => {
        myref.current.classList.remove('mostrar__enlaces')
    }
    return (
        <div className={`navegacion__enlaces  ${isActive ? "mostrar__enlaces" : ""}`} ref={myref}>

            <NavLink
                className="navegacion__enlace"
                onClick={onRemoveClass}
                to="/"
            >
                <img src={home} alt="home" />
                Inicio
            </NavLink>

            <NavLink
                className="navegacion__enlace"
                onClick={onRemoveClass}
                to="/skills"
            >
                <img src={skills} alt="skills" />
                Skills
            </NavLink>

            <NavLink
                className="navegacion__enlace"
                onClick={onRemoveClass}
                to="/proyectos"
            >
                <img src={projects} alt="proyectos" />
                Proyectos
            </NavLink>

            <NavLink
                className="navegacion__enlace"
                onClick={onRemoveClass}
                to="/contacto"
            >
                <img src={contact} alt="contacto" />
                Contacto
            </NavLink>

        </div >
    )
}

export default ItemNavEnlaces