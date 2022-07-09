import { useState } from "react";

function Forms() {
    function cadastrarUser(e) {
        e.preventDefault();
        console.log(`Usuario ${name} com ${email} cadastrado!`);
    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    );
}

export default Forms;
