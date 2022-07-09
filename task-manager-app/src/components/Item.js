import PropTypes from 'prop-types'

function Item ({marca, valor, tamanho}) {
    return (
        <>
            <li>{marca} - {valor} - {tamanho}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    valor: PropTypes.string,
    tamanho: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
}

export default Item