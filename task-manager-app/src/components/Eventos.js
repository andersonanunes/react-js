import Button from "./Button"

function Eventos() {
    
    function myEvent() {
        console.log ('Opa ativei o evento!')
    }
    
    function mySecondEvent() {
        console.log ('Opa ativei o segundo evento!')
    }

    return (
        <>
        <div>
            <p>Clique para disparar um evento: </p>
            <button onClick={myEvent}>Ativar Evento! </button>
            <br/>
            <Button event = {myEvent} text = 'Primeiro Evento com props' />
            <Button event = {mySecondEvent} text = 'Segundo Evento com props' />
        </div>
        </>
    ) 
}

export default Eventos