/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import iconNav from "../../../assets/icon-nav.svg"
import "./ItemNav.css"

const ItemNav = ({toggleClass}) => {

    return (
        <div className="logotipos">
            <img className="logotipos__img" src={iconNav} alt="logotipo" />
            <h1 className="logotipos__titulo">
                <Link className="titulo__enlace"
                    to="/"
                >
                    Lizandro Narvaez
                </Link>
            </h1>
            <div className="hamburger"
                onClick={toggleClass}
            >
                <div className="hamburger__item"></div>
                <div className="hamburger__item"></div>
                <div className="hamburger__item"></div>
            </div>
        </div>

    )
}

export default ItemNav