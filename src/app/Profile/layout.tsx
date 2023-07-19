import Header from "@/components/Header/Header"
import style from './style.module.css'
import Footer from "@/components/Footer/Footer"
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={style.container}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout