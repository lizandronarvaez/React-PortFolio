import { useState } from 'react';
import ItemNav from './ItemNav/ItemNav'
import ItemNavEnlaces from './ItemNavEnlaces/ItemNavEnlaces'
import "./nav.css"
const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        if (window.innerWidth <= 768) {
            setIsActive(!isActive);
        }
    }
    return (
        <nav className="navegacion" id="barra" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <ItemNav toggleClass={toggleClass} />
            <ItemNavEnlaces isActive={isActive} />
        </nav>
    )

}

export default Nav