import React from 'react';
import ContactButton from './contact_button/contact_button';

const Contact = () => {

    return(
        <div id="contact">
            <h1>Contact me</h1>
            <div className="buttons">

                <ContactButton href="https://www.linkedin.com/in/caiooliveira82/" title="Linkedin" classIcon="fa-brands fa-linkedin" item="LinkedIn" />
                <ContactButton href="https://www.instagram.com/caio.odev/" title="Instagram" classIcon="fa-brands fa-instagram" item="Instagram" />
                <ContactButton href="mailto:ccaio.oliveira83@gnail.com" title="E-mail" classIcon="fa-solid fa-at" item="E-mail" />
                <ContactButton href="https://github.com/ccaio-oliveira" title="GitHub" classIcon="fa-brands fa-github" item="GitHub" />
                <ContactButton href="https://api.whatsapp.com/send?phone=5574998059407" title="WhatsApp" classIcon="fa-brands fa-whatsapp" item="WhatsApp" />

            </div>
        </div>
    )
};

export default Contact;