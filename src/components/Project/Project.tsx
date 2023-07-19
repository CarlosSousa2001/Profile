"use client"
import Card from '../Card/Card'
import style from './style.module.css'
import useScrollReveal from '@/hooks/useScrollReveal'


const Project = () => {
    useScrollReveal(".your-element")

    return (
        <div id="projects" className={`${style.container} your-element`}>
            <div className={style.area}>
                <h1 className={style.title}>Meus projetos</h1>
            </div>
            <div className={style.projetos}>
                <Card />
            </div>

        </div>
    )
}

export default Project