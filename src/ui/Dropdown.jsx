export default function Dropdown({options=[],}) {
    return (
        <select className="w-20">
            {
                options.map(option => (
                    <option
                        key={option}
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    )
}