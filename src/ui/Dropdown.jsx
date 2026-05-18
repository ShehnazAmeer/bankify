export default function Dropdown({options=[],}) {
    return (
        <select className="w-20 border border-gray-300 p-5">
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