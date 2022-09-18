import styles from './Contact.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'



export default function Contact() {

    function handleChange() {

    }

    return (
        <form className={styles.form}>
            <Input 
                type="text"
                name="name"
                text="Seu nome"
                placeholder="Digite seu nome completo"
                handleOnChange={handleChange}
                value=""
            />
            <Input 
                type="text"
                name="email"
                text="Seu email"
                placeholder="Digite um email válido"
                handleOnChange={handleChange}
                value=""
            />
            <Input 
                type="text"
                name="assunto"
                text="Assunto"
                placeholder="Digite o assunto"
                handleOnChange={handleChange}
                value=""
            />
            <div className={styles.formControl}>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea type="text" name="mensagem" text="Mensagem" rows="5" />
            </div>
            <SubmitButton text="Enviar Mensagem" />
        </form>
    )
}