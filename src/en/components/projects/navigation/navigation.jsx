import React, {useState} from 'react';
import ProjectReact from '../projectReact/projectReact';
import ProjectJs from '../projectJs/projectJs';
import ProjectHtmlCss from '../projectHtmlCss/projectHtmlCss';
import ProjectPhpMySql from '../projectPhpMySql/projectPhpMySql';
import './styles.css';

const Navigation = ({change}) => {
    const [btnReact, setBtnReact] = useState('btnReact');
    const [btnJavascript, setBtnJavascript] = useState('');
    const [btnHtml, setBtnHtml] = useState('');
    const [btnPhp, setBtnPhp] = useState('');

    const setElements = (el) => {
        if(el === 'react'){
            setBtnReact('btnReact');
            setBtnJavascript('');
            setBtnHtml('');
            setBtnPhp('');
        }

        if(el === 'javascript'){
            setBtnJavascript('btnJavascript');
            setBtnReact('');
            setBtnHtml('');
            setBtnPhp('');
        }

        if(el === 'html'){
            setBtnHtml('btnHtml');
            setBtnReact('');
            setBtnJavascript('');
            setBtnPhp('');
        }

        if(el === 'php'){
            setBtnPhp('btnPhp');
            setBtnReact('');
            setBtnJavascript('');
            setBtnHtml('');
        }
    }
    return (
        <nav>
            <ul>
                <li>
                    <button className={btnReact} onClick={e => { change(<ProjectReact />); setElements('react'); }}><i className='fa-brands fa-react'></i> React</button>
                </li>
                <li>
                    <button className={btnJavascript} onClick={() => { change(<ProjectJs />); setElements('javascript'); }}><i className='fa-brands fa-js'></i> JavaScript</button>
                </li>
                <li>
                    <button className={btnHtml} onClick={() => { change(<ProjectHtmlCss />); setElements('html'); }}><i className='fa-brands fa-html5'></i> HTML5 / <i className="fa-brands fa-css3-alt"></i> CSS3</button>
                </li>
                <li>
                    <button className={btnPhp} onClick={() => { change(<ProjectPhpMySql />); setElements('php'); }}><i className='fa-brands fa-php'></i> PHP / <i className="fa-solid fa-database"></i> MySQL</button>
                </li>
            </ul>
        </nav>
    )
}

export default React.memo(Navigation);