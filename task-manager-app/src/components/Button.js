function Button(props) {
    // quando tiver uma única linha
    return <button onClick={props.event}>{props.text}</button>
}

export default Button