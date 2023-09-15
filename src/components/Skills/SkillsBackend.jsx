import Backend from "../../data/backend"
const SkillsBackend = () => {
    return (
        <div className="habilidades-backend" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h3>Backend</h3>
            <div className="habilidades" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                {
                    Backend.map((backend, i) => (
                        <div key={i} className="caja" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={backend.img} alt="nodejs" />
                            <p className="caja-texto">{backend.title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SkillsBackend