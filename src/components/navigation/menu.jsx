import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return(
        <nav id="navHeader">
            <ul>
                <li>
                    <Link to="/home_pt"><img src="images/brazil-circular.png" alt="icone Brasil"/>PT-BR</Link>
                </li>
                <li>
                    <Link to="/home_en"><img id="eua" src="images/estados-unidos-icone.png" alt="icone Estados Unidos"/>EN-USA</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;