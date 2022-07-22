import styles from '../project/ProjectForm.module.css'
import { useState } from "react";

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';


export default function ServiceForm({ handleSubmit, btnText, projectData }) {
    
    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    
    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }
    
    return (
        <div>
            <form className={styles.form} onSubmit={submit} >
                <Input 
                    type="text"
                    text="Nome do Serviço"
                    name="name"
                    placeholder="Digite o nome do serviço"
                    handleOnChange={handleChange}
                />
                <Input 
                    type="number"
                    text="Custo do Serviço"
                    name="cost"
                    placeholder="Digite o valor do serviço executado"
                    handleOnChange={handleChange}
                />
                <Input 
                    type="text"
                    text="Descrição do Serviço"
                    name="name"
                    placeholder="Digite a descrição do serviço"
                    handleOnChange={handleChange}
                />
                <SubmitButton text={btnText} />
            </form>
        </div>
    )
}