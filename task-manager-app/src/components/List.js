import Item from "./Item"

function List(props) {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Nike" valor = "R$ 500,00" tamanho = {42}/>
                <Item marca = "Adidas" valor = "R$ 350,00" tamanho = {40} />
                <Item marca = "Mizuno" valor = "R$ 320,00" tamanho = {40} />
                <Item valor = "R$ 250,00" tamanho = {40} />
            </ul>
        </>
    )
}

export default List