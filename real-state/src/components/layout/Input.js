import Label from './Label'

function Input({ label, type, name, text }) {
    return (
        <div className="filter-item">
            <Label className="labelSubmit">{label}</Label>
            <br />
            <input type={type} className={name} defaultValue={text} />
        </div>
    )
}

export default Input