const base = 'cursor-pointer focus:outline-none focus:ring foucs:ring-offset tracking-wide rounded-md';
export default function Dropdown({ options = [], value, onChange,styles,optionStyles }) {
    return (
        <select
            className={`${base} border ${styles}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            {
                options.map(option => (
                    <option
                        className={`${optionStyles}`}
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