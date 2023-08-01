import { Link } from "react-router-dom"
import "./Information.css"
const Information = () => {
    return (
        <>
            <div className="container__informacion" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                <h2 className="informacion--titulo">Bienvenido</h2>
                <div className="informacion__bloque" >
                    <p><span className="informacion-negrita">Soy un Desarrollador Full-Stack,</span>
                        si haz llegado hasta aqui, te doy las gracias y te invito a visitar mi sitio web.
                    </p>
                    <p>Si quieres conocer mas acerca de mis repositorios, te dejo un enlace mi GitHub.
                        <Link target="_blank" to={"https://github.com/lizandronarvaez"}>GitHub</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Information