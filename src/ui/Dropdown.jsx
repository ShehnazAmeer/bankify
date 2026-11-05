export default function Dropdown({ options = [], value, onChange,styles }) {
    return (
        <select
            className={`border  ${styles}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            {
                options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    )
}