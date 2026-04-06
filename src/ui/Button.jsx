export default function Button({ category, children, onClick, disabled, styles }) {
    const base = 'cursor-pointer focus:outline-none focus:ring foucs:ring-offset tracking-wide rounded-md'
    const style = {
        primary: `${base} bg-blue-500 text-blue-50`,
        secondary: `${base} bg-gray-500 text-gray-50`,
        basic:`${base}`
    }
    return (
        <button
            className={`${style[category]} ${styles}`} onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}