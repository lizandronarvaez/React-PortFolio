/* eslint-disable react/jsx-key */

import dataFrontend from "../../databaseSkill/frontend"

const SkillFrontend = () => {

    return (
        <div className="habilidades-frontend" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h3>Skills Frontend</h3>
            <div className="habilidades">
                {
                    dataFrontend.map((front, i) => (
                        <div key={i} className="caja" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={front.img} />
                            <p className="caja-texto">{front.title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SkillFrontend