"use client";
import style from './style.module.css'

const Form = () => {
    return (
        <div className={style.form}>
            <form
                action="https://formspree.io/f/moqovjpr"
                method="POST"
            >
                <label>
                    Seu E-mail
                    <input type="email" name="email"  maxLength={100}/>
                </label>

                <span style={{color:'white'}}>Sua mensagem</span>
                <textarea name="message"  maxLength={300} rows={5} className={style.textarea}></textarea>

                <button type="submit">Enviar</button>
            </form>
            <hr />
            <button className={style.whatsapp}><a href="https://contate.me/carlossousadev">Fale comigo no whatsapp</a></button>
        </div>
    )
}

export default Form