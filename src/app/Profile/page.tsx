import Intro from '@/components/Intro/Intro'
import style from './style.module.css'
import banner from '../../img/hero.jpg'
import Project from '@/components/Project/Project'
const Profile = () => {
    return (
        <div>
            <Intro
                title={"Olá, eu sou o Carlos Sousa"}
                subtitle={"Desenvolvedor Front End"}
                buttonContact={true}
                img={banner}
                colorTitle={false}
                colorSubtitle={false}
                resume={""}
                />
            <Intro
                title={"Sobre mim"}
                subtitle={" Eu sou desenvolvedor Front End"}
                buttonContact={false}
                img={""} 
                colorTitle={true}
                colorSubtitle={true}
                resume={"Sou um desenvolvedor front end estudando programação e trabalhando em projetos usando React.js, Next.js, TypeScript, Node.js e MySQL. Acredito que a programação é uma habilidade crucial e estou empenhado em continuar aprimorando minhas habilidades como desenvolvedor."}
                />

                <Project/>

        
                
        </div>

    )
}

export default Profile