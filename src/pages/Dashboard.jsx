import MainHeading from "../ui/MainHeading";

export default function Dashboard() {
    return (
        <div>
            <MainHeading>Dashboard</MainHeading>
            <div className="border flex justify-between font-bold py-8">
                <p>
                    <span className="font-bold text-[clamp(1rem,2vw,3rem)] text-gray-700">Total Balance:</span>
                    <span className="px-3">$700</span>
                </p>
                <p className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-700" >
                    <span>Prev</span>
                    <span>Next</span>
                </p>
            </div>

            <div className="border grid grid-cols-2 gap-3">
                <div className="border">
                    <h3 className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-900 py-5">Transection History</h3>
                    <p>Updated every several minutes</p>
                    <div>Details</div>
                </div>
                <div className="border">
                    <h3 className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-900 py-5">Exchange rate</h3>
                    <p>Last udpated xx:xx Pm</p>
                    <div>Details</div>
                </div>
            </div>
        </div>
    )
}