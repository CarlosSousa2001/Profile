import Footer from "@/components/Footer/Footer"
import Profile from "./Profile/page"
import Header from "@/components/Header/Header"
import style from "./Profile/style.module.css"

const Page = () => {
    return (
        <div className={style.container}>
        <Header/>
        <Profile/>
        <Footer/>
        </div>

    )
}

export default Page