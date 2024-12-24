import React from 'react';
import LinkComponent from './LinkComponent';
import Image from 'next/image';
import profliePic from '../Perfil.jpg'
import DateTimeComponent from './DateTimeComponent';
import "./style.css";

const PerfilComponent: React.FC = () => {
    return (
        <div className='profile-container'>
            <h1>Gustavo M Fava</h1>
            <p>Full-stack</p>
            <DateTimeComponent/>
            <div className='links-container'>
                <Image src={profliePic}alt='Profile Picture' className='profile-picture'/>
                <LinkComponent href="https://github.com/Gustavofava123350" title="GitHub"/><i className="bi bi-github"/>
                <LinkComponent href="https://www.instagram.com/gustavo_fava_autista_/" title="Instagram"/><i className="bi bi-instagram"/>
                <LinkComponent href='https://wa.me/558598134009' title="WhatsApp"/><i className="bi bi-whatsapp"/>
            </div>
        </div>
    );
}

export default PerfilComponent;

