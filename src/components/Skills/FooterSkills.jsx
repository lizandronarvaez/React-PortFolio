import FullStack from "../../../public/img/full-stack-developer.png"
const FooterSkills = () => {
    return (
        <div
            className="informacion__fullstack"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <img
                className="skills"
                src={FullStack}
                alt="logo"
            />
            <p>
                <small>
                Si estás en búsqueda de un desarrollador web proactivo, comprometido con la ampliación
                constante de sus habilidades y el crecimiento profesional, no dudes en ponerte en contacto conmigo.
                </small>
            </p>
        </div>
    )
}

export default FooterSkills