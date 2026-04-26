const style = {
    vertical:'flex flex-col '
    
}
export default function FormRow({ children, styles, category }) {
    return (
        <div className={`${style[category]} ${styles}`}>
            {children}
        </div>
    )
}