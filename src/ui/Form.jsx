const style = {
    login:''
}
export default function Form({ children, onSubmit, styles, category }) {
    return (
        <form onSubmit={onSubmit} className={`${styles} ${style[category]}`}>
            {children}
        </form>
    )
}