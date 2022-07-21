import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './Projects.module.css'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../project/ProjectCard"
import Loading from "../layout/Loading"

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState('')

    const location = useLocation()
    let message = ''
    
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data) // exibe no console os projetos
                setProjects(data);
                setRemoveLoader(true) // remove o loader
            })
            .catch((err) => console.log(err));
    }, [])

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id));
                setMessageSuccess('Projeto removido com sucesso!') // mensagem
            })
            .catch((err) => console.log(err));
    }


    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Projects</h1>
                <LinkButton to="/newproject" text="Criar um Novo Projeto" />
            </div>
            { message && <Message msg={message} type="success" /> }
            {messageSuccess && <Message msg={messageSuccess} type="sucess" />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project.id} 
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />)
                )}
                {!removeLoader && <Loading />}
                {!removeLoader && projects.length === 0 && (
                    <p>Nenhum projeto cadastrado!</p>
                )}
            </Container>
        </div>
    )
}

