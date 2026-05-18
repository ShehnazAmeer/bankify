const base = 'cursor-pointer focus:outline-none focus:ring foucs:ring-offset tracking-wide rounded-md';

export default function Button({ category,type='button', children, onClick, disabled, styles }) {
    const style = {
        primary: `${base} bg-blue-500 text-blue-50`,
        secondary: `${base} bg-gray-500 text-gray-50`,
        basic: `${base}`,
        signup:`${base} text-blue-500 font-bold`
    }
    return (
        <button
            type={type}
            className={`${style[category]} ${styles}`} onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}