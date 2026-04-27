const base = 'flex';
export default function FormRow({ children, styles, category }) {
    const style = {
    base:'flex',
    vertical: `${base} flex-col`,
    horizental:`${base} flex-row`,
    
}
    return (
        <div className={`${style[category]} ${styles}`}>
            {children}
        </div>
    )
}