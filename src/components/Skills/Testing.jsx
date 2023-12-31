import testing from "../../data/testing"

const Testing = () => {
    return (
        <div
            className="habilidades-testing"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <h3>Testing</h3>
            <div className="habilidades">
                {
                    testing.map(({ title, img }, i) => (
                        <div
                            key={i}
                            className="caja"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <img src={img} alt="jest-testing" />
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

export default Testing