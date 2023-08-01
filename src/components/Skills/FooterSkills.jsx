import FullStack from "../../../public/img/full-stack-developer.png"
const FooterSkills = () => {
    return (
        <div className="informacion__fullstack" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <img className="skills" src={FullStack} alt="logo" />
            <p>Si necesitas un desarrollador web con ganas de ampliar sus
                conocimientos y crecer profesionalmente, puedes ponerte en contacto conmigo.
            </p>
        </div>
    )
}

export default FooterSkills