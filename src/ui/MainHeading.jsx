export default function MainHeading({children}) {
    return (
        <h1 className="border border-red-700 py-15 font-bold text-[clamp(2rem,3vw,6rem)]"> {children} </h1>
    )
}