import React, { useState, useCallback } from 'react';
import Navigation from './navigation/navigation';
import ProjectReact from './projectReact/projectReact';

const Projects = () => {

    const [content, setContent] = useState(<ProjectReact />);

    const changeContent = useCallback(function(item){
        setContent(item);
    }, [setContent]);

    return(
        <>
            <h1>Projects</h1>
            <Navigation change={changeContent} />
            <div id="project-content">
                {content || (<h1>Click on one of the buttons above! </h1>)}
            </div>
            
        </>
    )
}

export default Projects;