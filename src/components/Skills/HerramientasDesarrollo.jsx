import Tools from "../../data/tools"

const HerramientasDesarrollo = () => {
    return (
        <div
            className="herramientas-desarrollo"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <h3>Herramientas Desarrollo & Control de Versiones</h3>
            <div className="habilidades">
                {
                    Tools.map(({ title, img }, i) => (
                        <div
                            key={i}
                            className="caja"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <img
                                src={img}
                                alt="vscode"
                            />
                            <p
                                className="caja-texto">
                                {title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HerramientasDesarrollo