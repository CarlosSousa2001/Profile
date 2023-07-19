"use client"
import style from './style.module.css'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Form from '../Form/Form'

const Footer = () => {
    return (
        <div id='contact' className={`${style.container}`}>
            <div className={style.area}>
                <div className={style.contact}>
                    <div className={style.iconArea}>
                        <AiOutlineGithub className={style.icon} />
                        <a href="https://github.com/CarlosSousa2001?tab=repositories">GitHub</a>
                    </div>
                    <div className={style.iconArea}>
                        <AiFillLinkedin className={style.icon} />
                        <a href='https://www.linkedin.com/in/carlos-sousa-26b4b5212/'>Linkedin</a>
                    </div>
                    <div className={style.iconArea}>
                        <AiFillInstagram className={style.icon} />
                        <a href='https://www.instagram.com/carlos_r._sousa/'>Instagram</a>
                    </div>
                    <div className={style.iconArea}>
                        <AiOutlineWhatsApp className={style.icon} />
                        <a href="https://contate.me/carlossousadev">WhatsApp</a>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Footer