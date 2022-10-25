import React from 'react';

const Skills = () => {
    return (
        <div id="skills">

            <h1>Habilidades</h1>
            <div id="allSkills">

                <div id="front">
                    <h2>Front-End</h2>
                    <p><i className="fa-brands fa-html5"></i> HTML5</p>
                    <p><i className="fa-brands fa-css3-alt"></i> CSS3</p>
                    <p><i className="fa-brands fa-js-square"></i> JavaScript</p>
                </div>
                <div id="back">
                    <h2>Back-End</h2>
                    <p><i className='fa-brands fa-php'></i> PHP</p>
                </div>
                <div id="framework">
                    <h2>Frameworks</h2>
                    <p><i className="fa-brands fa-bootstrap"></i> Bootstrap</p>
                    <p><i className="fa-brands fa-react"></i> React.JS (estudando)</p>
                    <p><i className="fa-brands fa-react"></i> React Native (estudando)</p>
                </div>
                <div id="database">
                    <h2>Banco de dados</h2>
                    <p><i className="fa-solid fa-database"></i> MySQL</p>
                </div>
                <div id="other">
                    <h2>Outros</h2>
                    <p><i class="fa-brands fa-wordpress"></i> WordPress</p>
                    <p><i class="fa-brands fa-elementor"></i> Elementor</p>
                </div>
            </div>

        </div>
    )
}

export default Skills;