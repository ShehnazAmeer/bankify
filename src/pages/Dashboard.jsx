import CurrencyCard from "../ui/CurrencyCard";
import MainHeading from "../ui/MainHeading";
import SectionHeader from "../ui/SectionHeader";


export default function Dashboard() {
    return (
        <div>
            <SectionHeader>
                <MainHeading>Dashboard</MainHeading>
            </SectionHeader>
             <p className="font-bold text-[clamp(1rem,2vw,3rem)] text-blue-500">
                    Balance  
                </p>
           
            <div className="grid gap-10 py-5 grid-cols-4">
                <CurrencyCard/>
            </div>

            <div className="border grid grid-cols-[3fr_2fr] gap-3">
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