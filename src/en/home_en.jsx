import React from "react";
import Perfil from './components/perfil/perfil';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Contact from './components/contact/contact';

const HomeEn = () => {
    return (
        <>
            <header>
                <Perfil />
                <Skills />
            </header>
            <main>
                <section id="about-contact">
                    <About />
                    <Contact />
                </section>
            </main>
        </>
    )
}

export default HomeEn;