import { Link } from "react-router-dom"
import "./Home.css"
import FullStack from "../../../public/img/fullstack-title.png"
import PhotoProfile from "../../../public/img/foto.png"
const Home = () => {
    return (
        <>
            <main className="home">
                <div className="container__informacion" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                    <img className="img--titulo" src={FullStack} alt="img title" />
                    <h3 className="informacion--titulo">Sobre mi</h3>
                    <div className="informacion__bloque" >
                        <hr />
                        <img src={PhotoProfile} alt="img" />
                        <p>
                            ¡Hola! Me llamo <strong>Lizandro Narváez</strong> , soy fullstack developer y mi stack favorito es <strong>MERN</strong>,
                            tambien tengo conocimientos en otras tecnologías.
                        </p>
                        <p>
                            Soy una persona <strong>autodidacta</strong>, <strong>busco aprender</strong> y superarme día a día. Mi lado favorito es el <strong>backend</strong>, y de vez en cuando me gusta tocar <strong>frontend</strong>.
                        </p>
                        <p>Si quieres conocer mas acerca de mis repositorios, te dejo un enlace mi GitHub.
                            <Link target="_blank" to={"https://github.com/lizandronarvaez"}>
                                <strong>GitHub</strong> </Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home