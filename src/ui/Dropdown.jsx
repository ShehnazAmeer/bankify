export default function Dropdown({ options = [], value, onChange }) {
    return (
        <select
            className="w-20 border border-gray-300 p-5"
            onChange={() => onChange(e.target.value)}
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