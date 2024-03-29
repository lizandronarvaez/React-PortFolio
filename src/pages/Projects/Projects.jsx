/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom";
import { projectsList } from "./projectsList";
import "./Projects.css";
export const Projects = () => {

    return (
        <div className="container">
            <div className="grid">
                {
                    projectsList.map((
                        {
                            title,
                            descripcion,
                            img,
                            repositorio,
                            enlaceProyecto
                        },
                        i) => (
                        <div key={i} className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <h2>{title}</h2>
                            <div className="proyecto">
                                <img src={img} alt={img} />
                                <p>{descripcion}</p>
                            </div>
                            <NavLink className="btn btn-repositorio" to={repositorio} target="_blank">
                                Repositorio
                            </NavLink>
                            <NavLink className="btn btn-enlace" to={enlaceProyecto} target="_blank">
                                Ver Proyecto
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}