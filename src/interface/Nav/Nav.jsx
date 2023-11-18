import { useState } from 'react';
import ItemNav from './ItemNav/ItemNav';
import ItemNavEnlaces from './ItemNavEnlaces/ItemNavEnlaces';
import "./nav.css";
const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => window.innerWidth <= 768 ? setIsActive(!isActive) : null;
    return (
        <nav
            className="navegacion"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
        >
            <ItemNav toggleClass={toggleClass} />
            <ItemNavEnlaces isActive={isActive} />
        </nav>
    )
}

export default Nav