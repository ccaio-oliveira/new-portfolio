import React from 'react';

const ContactButton = ({href, title, classIcon, item}) => {
    return(
        <>
            <a href={href} rel="noopener noreferrer" target="_blank" title={title}>
                <i className={classIcon}></i> {item}
            </a>
        </>
    )
}

export default ContactButton;