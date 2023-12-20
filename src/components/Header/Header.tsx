"use client";
import { useEffect, useState } from 'react'
import styles from './style.module.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleResize = () => {
        if (window.innerWidth < 790) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='home' className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>Carlos Sousa</h1>
                </div>
                <div className={styles.menu}>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#contact">Contatos</a></li>
                            <li><a href="#projects">Projetos</a></li>
                        </ul>
                    </nav>
                </div>
                <div style={{ display: menu ? 'block' : 'none' }}>
                    <div onClick={toggleMenu} className={isOpen ? styles.hamburger : `${styles.hamburger} ${styles.ativo}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <nav className={styles.menuLateral} style={{ width: isOpen ? '60px' : '250px', backgroundColor: isOpen ? 'trasnsparent' : '#202020', display: isOpen ? 'none' : 'block', transition: 'all 0.5s' }}>
                        <div onClick={toggleMenu} className={isOpen ? styles.hamburger : `${styles.hamburger} ${styles.ativo}`}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul>
                            <li className={styles.itemmenu}><a href="#home">Home</a></li>
                            <li className={styles.itemmenu}><a href="#sobre">Sobre</a></li>
                            <li className={styles.itemmenu}><a href="#contact">Contatos</a></li>
                            <li className={styles.itemmenu}><a href="#projects">Projetos</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Header