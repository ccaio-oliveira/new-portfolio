import React from 'react';

const ProjectItem = ({title, src, alt, href, repo}) => {
    return(
        <div className="p-item">
            <h2>{title}</h2>
            <img src={src} alt={alt} />
            <br />
            <a href={href} target="_blanck" className="project-button"><i className='fa-solid fa-code'></i> VISIT</a>
            <a href={repo} target="_blanck" className="project-button"><i className='fa-solid fa-code'></i> CODE</a>
        </div>
    )
}

export default ProjectItem;