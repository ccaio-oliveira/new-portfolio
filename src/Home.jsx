import React from "react";
import './Home.css';
import Menu from './components/navigation/menu';
import Content from './components/content/content';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    return (
        <div id="container">

            <Router>
                <Menu />
                <Content />
            </Router>
            
        </div>
    )
}

export default Home;