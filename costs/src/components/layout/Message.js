import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // se nao tem msg seta visible como false
        if (!msg) {
            setVisible(false)
            return 
        }

        // se tem msg seta visible como true e inicializa o timer de 3s pra exibir
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            { visible && (
                <div className={`${styles.message} ${styles[type]}`}><p>{msg}</p></div>
            )}
        </>

    )
}

export default Message