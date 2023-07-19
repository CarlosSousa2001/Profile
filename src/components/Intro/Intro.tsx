"use client";
import Image from 'next/image';
import style from './style.module.css'
import { SiNextdotjs } from 'react-icons/si'
import { BiLogoReact } from 'react-icons/bi'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMysql } from 'react-icons/si'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

type Props = {
    title: string,
    subtitle: string,
    buttonContact: boolean,
    img: any,

    colorTitle: boolean,
    colorSubtitle: boolean,
    resume: string,
}
const Intro = (props: Props) => {



    const [element, setElement] = useState<any>([]);

    const elementRef = useRef(null);
    const addElement = () => {

        const newElement = [];


        for (let i = 1; i <= 81; i++) {
            newElement.push(
                <motion.div
                    key={i}
                    className={style.element}
                    initial={{ scale: 0.7, opacity: 0.5 }} // Configuração inicial da animação
                    animate={{
                        rotate: 360,
                        scale: [1, 0.5, 0.1],
                        borderRadius: ['0%', '50%', '50%'],
                        transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' },
                    }} // Configuração da animação
                    whileHover={{ rotate: 360 }}
                ></motion.div>
            )
        }

        setElement(newElement);
    }

    useEffect(() => {
        addElement();
    }, [])

    const getStylesTitle = () => {
        if (props.colorTitle) {
            return {
                backgroundImage: 'radial-gradient(circle at -0.33% 54.4%, #ff8c86 0, #ff7b87 16.67%, #ff6182 33.33%, #f23c78 50%, #da0070 66.67%, #c6006f 83.33%, #b50074 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
            };
        } else {
            return {
                color: 'white',
            };
        }
    };

    const getStyleSubtitle = () => {
        if (props.colorSubtitle) {
            return {
                color: 'white',
                width: "70%",
                backgroundImage: 'linear-gradient(to right, white, white)',
            }
        }
    }

    return (
        <div className={`${style.container}`}>
            <div className={style.area}>
                <div className={style.info}>
                    <h3 className={style.title} style={getStylesTitle()}>{props.title}</h3>
                    <h2 style={getStyleSubtitle()} className={style.subtitle}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(props.subtitle)
                                .start();
                        }
                        }
                        options={{
                            autoStart: true,
                            delay: 50,
                            deleteSpeed: 90,
                            cursor: '',
                            
                        }}
                        
                    />
                    </h2>
                    
                    {props.buttonContact ? <button className={style.buttonContact}>Contate-me</button> : <span className={style.resume}>{props.resume}</span>}
                </div>
                <div className={style.img}>
                    {props.buttonContact ?
                        <div className={style.containerOne}	>
                            {element}
                        </div>
                        :
                        <div className={style.areaBlocs}>
                            <div className={style.block}>
                                <div className={style.itemBlock}>
                                    <SiNextdotjs />
                                    <span className={style.itemText}>Next.js</span>
                                </div>
                                <div className={style.itemBlock}>
                                    <BiLogoReact />
                                    <span className={style.itemText}>React.js</span>
                                </div>
                                <div className={style.itemBlock}>
                                    <IoLogoNodejs />
                                    <span className={style.itemText}>Node.js</span>
                                </div>
                                <div className={style.itemBlock}>
                                    <SiMysql />
                                    <span className={style.itemText}>Mysql</span>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Intro
