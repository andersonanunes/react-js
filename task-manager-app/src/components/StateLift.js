function StateLift({setNome}) {
    return (
        <>
        <p>Digite seu nome: </p>
        <input type="text" placeholder="Digite seu nome inteiro" onChange={(e) => setNome(e.target.value)} />
        </>
    ) 
}

export default StateLift