import React, { useState, useCallback } from 'react';
import Navigation from './navigation/navigation';

const Projects = () => {

    const [content, setContent] = useState('');

    const changeContent = useCallback(function(item){
        setContent(item);
    }, [setContent]);

    return(
        <>
            <h1>Projetos</h1>
            <Navigation change={changeContent} />
            <div id="project-content">
                {content || (<h1>Clique em um dos botões acima! </h1>)}
            </div>
            
        </>
    )
}

export default Projects;