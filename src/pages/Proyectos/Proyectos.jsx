/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom"
import proyectosList from "./proyectosList"
import "./Proyectos.css"
const Proyectos = () => {

    return (
        <div className="container">
            <div className="grid">
                {
                    proyectosList.map((proyecto, i) => (
                        <div key={i} className="box">
                            <h2>{proyecto.title}</h2>
                            <div className="proyecto">
                                <img src={proyecto.img} alt="" />
                                <p>{proyecto.descripcion}</p>
                            </div>
                            <div className="enlaces">
                                <NavLink
                                    className="btn btn-repositorio"
                                    to={proyecto.repositorio}
                                >
                                    Repositorio
                                </NavLink>
                                <NavLink
                                    className="btn btn-enlace"
                                    to={proyecto.enlaceProyecto}
                                >
                                    Ver Proyecto
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Proyectos