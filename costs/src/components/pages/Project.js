import styles from './Project.module.css'
import { v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../services/ServiceForm';
import ServiceCard from '../services/ServiceCard';

export default function Project() {

    const {id} = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectform] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setServices(data.services)
        })
        .catch((err) => console.log(err));
    }, [id])

    function editPost(project) {
        
        // zera a variável para evitar que se o projeto for editado mais de uma vez não exiba a mensagem
        setMessage('')
        
        //budget validation
        if (project.budget < project.cost) {
            // mensagem
            setMessage('O Budget não pode ser menor que o custo do Projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setShowProjectform(!showProjectForm)
            // mensagem
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch((err) => console.log(err));        
    }


    function createService() {
        // last service
        const lastService = project.services[project.services.length -1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // max value validation
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setShowProjectform(!showProjectForm)
            // mensagem
            setMessage('Projeto atualizado!')
            setType('success')
            setShowServiceForm(false)
        })
        .catch((err) => console.log(err));    

    }

    function removeService(id, cost) {
        
        setMessage('')
        
        const servicesUpdate = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdate = project
        projectUpdate.services = servicesUpdate
        projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

        // update project
        fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(projectUpdate),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(projectUpdate)
            setServices(servicesUpdate)
            // mensagem
            setMessage('Projeto removido!')
            setType('success')
            setShowServiceForm(false)
        })
        .catch((err) => console.log(err));          

    }

    function toggleProjectForm() {
        setShowProjectform(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? 
            (
            <div className={styles.projectDetails}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.detailsContainer}>
                        <h1>Projeto: {project.name}</h1> 
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar Projeto' : 'Fechar Projeto'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.projectInfo}>
                                <p><span>Categoria: </span>{project.category.name}</p>
                                <p><span>Total Budget: </span>R$ {project.budget}</p>
                                <p><span>Total Utilizado: </span>R$ {project.cost}</p>
                            </div>
                        ) : (
                            <div className={styles.projectInfo}>
                                <ProjectForm handleSubmit={editPost} projectData={project} btnText='Concluir Edição' />
                            </div>
                        )}
                    </div>
                    <div className={styles.serviceFormContainer}>
                        <h2>Adicionar Serviço</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar Serviço' : 'Fechar Serviço'}
                        </button>
                        <div className={styles.projectInfo}>
                            {showServiceForm && (
                                <ServiceForm 
                                    handleSubmit={createService}
                                    btnText="Incluir serviço"
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        {
                            services.length > 0 &&
                            services.map((service) => (
                                <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))
                        }
                        {
                            services.length === 0 && <p>Não existem serviços cadastrados</p>
                        }
                    </Container>
                </Container>
            </div>
            ) : (
                <Loading />
            )}
        </>
    )
}