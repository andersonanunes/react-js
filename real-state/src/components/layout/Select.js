import styles from './Select.module.css'



function Select({ name, text, options, handleOnChange, value }) {
    return (
        <div className={styles.filterItem}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option value>Todos</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select