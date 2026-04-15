export default function CurrencyCard() {
    return (
        <div className="flex justify-between items-center px-3 py-5 bg-blue-50 rounded-md text-[clamp(0.5rem,2vw,1rem)] ">
            <div className="px-5 flex space-x-3 items-center">
                <p className="border rounded-full p-4">Flag</p>
                <p>500 USD</p>
            </div>
            <div>arrow</div>
        </div>
    )
}