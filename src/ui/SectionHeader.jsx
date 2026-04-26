export default function SectionHeader({children,styles}) {
    return (
        <header className= {`${styles}`}>
            {children}
        </header>
    )
}