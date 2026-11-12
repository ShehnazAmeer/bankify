const base = 'cursor-pointer focus:outline-none focus:ring foucs:ring-offset tracking-wide rounded-md';

export default function Button({ category,type='button', children, onClick, disabled, styles }) {
    const style = {
        primary: ` bg-blue-500 text-blue-50 ${base}`,
        secondary: ` bg-gray-500 text-gray-50 ${base}`,
        basic: `${base}`,
        signup:` text-blue-500 font-bold ${base}`
    }
    return (
        <button
            type={type}
            className={`${style[category]} ${styles}`} 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}