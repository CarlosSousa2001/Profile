"use client"
import Card from '../Card/Card'
import style from './style.module.css'



const Project = () => {


    return (
        <div id="projects" className={`${style.container}`}>
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