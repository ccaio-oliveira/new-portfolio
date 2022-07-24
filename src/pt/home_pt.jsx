import React from "react";
import Perfil from './components/perfil/perfil';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';

const HomePt = () => {
    return(
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
                <section id="projects">
                    <Projects />
                </section>
            </main>
        </>
    )
}

export default HomePt;