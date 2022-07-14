import { useNavigate } from "react-router-dom";

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useNavigate ()

    function createPost(project) {

        // initialize costs and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            history('/projects', { state: {message: 'Projeto criado com sucesso!'} })
        })
        .catch((err) => console.log(err))

    }

    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar um Novo Projeto</h1>
            <p>Crie seu produto para depois adicionar seus serviços</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
        </div>
    )
}

export default NewProject