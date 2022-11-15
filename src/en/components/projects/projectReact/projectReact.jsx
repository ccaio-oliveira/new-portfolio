import React from 'react';
import ProjectItem from '../projectItem/projectItem';

const ProjectReact = () => {
    return(
        <>
            <ProjectItem title="REST API Country" src="./images/country-project.png" alt="Country" href="https://vermillion-faun-eec485.netlify.app/" repo="https://github.com/ccaio-oliveira/find-countries" />
            <ProjectItem title="Expenses Chart" src="./images/expenses-chart-component-main.png" alt="Expenses Chart" href="https://superlative-snickerdoodle-007a4f.netlify.app" repo="https://github.com/ccaio-oliveira/expenses-chart-component-main" />
            <ProjectItem title="Meu Portfolio" src="./images/portfolio.png" alt="Portfolio image" href="https://mydevelopernow.com" repo="https://github.com/ccaio-oliveira/new-portfolio" />
            <ProjectItem title="Advice App" src="./images/advice-app.png" alt="Advice App" href="https://master--bejewelled-pasca-137756.netlify.app" repo="https://github.com/ccaio-oliveira/advice-generator-app-main" />
            <ProjectItem title="Active States" src="./images/active-status.png" alt="Active Status" href="https://deluxe-moxie-8667b5.netlify.app/" repo="https://github.com/ccaio-oliveira/time-tracking" />
        </>
    )
}

export default ProjectReact;