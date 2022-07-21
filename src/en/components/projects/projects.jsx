import React, { useState } from 'react';
import Navigation from './navigation/navigation';

const Projects = () => {

    const [content, setContent] = useState('');

    function changeContent(item){
        setContent(item);
    }

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