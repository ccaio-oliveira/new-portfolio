import React from 'react';

const Contact = () => {

    return(
        <div id="contact">
            <h1>Meus contatos</h1>
            <div className="buttons">

                <a href="https://www.likedin.com/in/ccaiooliveira82" rel="noopener noreferrer" target="_blank" title="Linkedin">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                </a>
                <a href="https://www.instagram.com/ccaiooliveira27/" rel="noopener noreferrer" target="_blank" title="Instagram">
                    <i className="fa-brands fa-instagram"></i> Instagram
                </a>
                <a href="https://github.com/Grindelwald27" rel="noopener noreferrer" target="_blank" title="GitHub">
                    <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="mailto:ccaio.oliveira83@gnail.com" rel="noopener noreferrer" target="_blank" title="E-mail">
                    <i className="fa-solid fa-at"></i> E-mail
                </a>
                <a href="https://api.whatsapp.com/send?phone=5574998059407" rel="noopener noreferrer" target="_blank" title="GitHub">
                    <i className="fa-brands fa-whatsapp"></i> Whatsapp
                </a>

            </div>
        </div>
    )
};

export default Contact;