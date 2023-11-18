/* eslint-disable react/jsx-key */

import Frontend from "../../data/frontend"

const SkillFrontend = () => {

    return (
        <div
            className="habilidades-frontend"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <h3>Frontend</h3>
            <div className="habilidades">
                {
                    Frontend.map(({ title, img }, i) => (
                        <div
                            key={i}
                            className="caja"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <img src={img} />
                            <p
                                className="caja-texto"
                            >
                                {title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillFrontend