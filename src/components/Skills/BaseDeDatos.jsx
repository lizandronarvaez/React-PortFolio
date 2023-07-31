import Database from "../../databaseSkill/database"
const BaseDeDatos = () => {
    return (
        <div className="base-datos" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h3>Bases de datos</h3>
            <div className="habilidades" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                {
                    Database.map((skill,i)=>(
                        <div key={i} className="caja" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                        <img src={skill.img} alt={skill.alt} />
                        <p className="caja-texto">Mysql</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BaseDeDatos