function Saudacao({ nomeLift }) {
   
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome} tranquilo? ` 
    }
    
    
    return (
        <>
        {nomeLift && <p>{gerarSaudacao(nomeLift)}</p>}
        </>
    )
}

export default Saudacao