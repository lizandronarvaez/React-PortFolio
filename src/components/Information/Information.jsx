import { Link } from "react-router-dom"
import "./Information.css"
// import WebDev from "../../img/web-dev.png"
const Information = () => {
    return (
        <>
            <h2 className="informacion--titulo">Bienvenido a mi PortFolio</h2>
            <div className="informacion__bloque" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                <p>
                    <span className="informacion-negrita">
                        Soy un Desarrollador Full-Stack,
                    </span>
                    lo que estas viendo es mi PortFolio que he construido
                    con los conocimientos que tengo en Frontend.
                </p>
                <p>Abajo podras revisar mi repositorio con los proyectos que he ido creando,
                    de todas formas de dejo un enlace directo a mi GitHub.
                    <Link to={"https://github.com/lizandronarvaez"}>GitHub</Link>
                </p>
            </div>
        </>
    )
}

export default Information