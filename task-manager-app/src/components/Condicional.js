import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        console.log('Testando...')
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
        console.log('limpando campo de mensagem com if...')
    }

    return(
        <>
        <h2>Cadastre seu email</h2>
        <form>
            <div>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={enviarEmail}>Enviar mensagem</button>
            {userEmail && (
                <div>
                    <p>Email {userEmail} enviado com sucesso!</p>
                    <button onClick={limparEmail}>Fechar</button>
                </div>
            )}
        </form>
        </>
    )
}

export default Condicional