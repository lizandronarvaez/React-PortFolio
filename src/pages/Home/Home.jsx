import Information from "../../components/Information/Information"
import "./Home.css"
const Home = () => {
    return (
        <main className="contenedor home" id="informacion">
            <div className="container__informacion" id="container__informacion">
                <Information />
            </div>
        </main>
    )
}

export default Home