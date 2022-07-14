import { useState, useEffect } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
        // console.log(project)
    };

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Digite o nome do Projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Valor do Budget"
                name="budget"
                placeholder="Digite o valor do Budget"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name="categoryId"
                text="Selecione a Categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
