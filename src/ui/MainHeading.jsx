export default function MainHeading({children,style}) {
    return (
        <h1 className={`font-bold ${style}`}> {children} </h1>
    )
}