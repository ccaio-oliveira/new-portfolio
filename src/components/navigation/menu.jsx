import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {

    return(
        <nav id="navHeader">
            <ul>
                <li>
                    <Link to="/home_pt"><img src="images/brazil-circular.png" alt="icone Brasil"/><span>PT-BR</span></Link>
                </li>
                <li>
                    <Link to="/home_en"><img id="eua" src="images/estados-unidos-icone.png" alt="icone Estados Unidos"/><span>EN-USA</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;