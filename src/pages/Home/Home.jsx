import { Link } from "react-router-dom";
import "./Home.css";
import { photoProfile } from "../../../public";

export const Home = () => {
    return (
        <>
            <main className="home">
                <div
                    className="container__informacion"
                    data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-once="true"
                >
                    <h3 className="informacion--titulo">Sobre mí</h3>
                    <div className="informacion__bloque" >
                        <hr />
                        <img src={photoProfile} alt="img" />
                        <p>
                            ¡Saludos! Mi nombre es <strong>Lizandro Narváez</strong>, soy <strong>FullStack Developer</strong>.
                        </p>
                        <p>
                            Aunque mi experiencia principal es el <i><strong>backend</strong></i>, poseo habilidades en el desarrollo frontend, particularmente
                            con tecnologías como React.
                        </p>
                        <p>
                            Me identifico como <strong>autodidacta</strong>, busco aprender y superarme cada día.
                            Me considero una persona <strong>curiosa</strong>, <strong>proactiva</strong>, <strong>organizada</strong>,
                            <strong> responsable</strong> y con habilidades para la <strong>resolución de problemas</strong>.
                            He trabajado en <strong>equipo</strong>, destacando mi capacidad para el <strong>trabajo colaborativo</strong>.
                        </p>
                        <p>
                            Si deseas conocer más sobre mis proyectos y repositorios, te invito a visitar mi perfil en GitHub,
                            encontrarás una variedad de repositorios que destacan mi dedicación y experiencia
                            en el desarrollo.
                            <small>
                                <strong>Puedes acceder a mi perfil a través del siguiente enlance:</strong>
                            </small>
                            <Link target="_blank" to={"https://github.com/lizandronarvaez"}>
                                <strong>GitHub</strong> </Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}