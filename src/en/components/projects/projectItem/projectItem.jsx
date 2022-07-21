import React from 'react';

const ProjectItem = ({title, src, alt, href}) => {
    return(
        <div className="p-item">
            <h2>{title}</h2>
            <img src={src} alt={alt} />
            <br />
            <a href={href} target="_blanck"><i className='fa-solid fa-code'></i> VISIT</a>
        </div>
    )
}

export default ProjectItem;