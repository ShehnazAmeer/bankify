export default function Spinner() {
    return (
        <div
            className="h-full flex justify-center items-center "
        >
            <div
                className="w-64 h-64 rounded-full animate-spin bg-[conic-gradient(blue_0deg,transparent_40deg,blue_360deg)]
        [-webkit-mask:radial-gradient(farthest-side,#0000_calc(100%-8px),#000_0)]
        [mask:radial-gradient(farthest-side,#0000_calc(100%-8px),#000_0)]"
            >
            </div>
        </div>
    )
}