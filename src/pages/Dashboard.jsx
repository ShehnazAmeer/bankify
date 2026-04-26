import CurrencyChart from "../features/dashboard/CurrencyChart";
import ExchangeRate from "../features/dashboard/ExchangeRate";
import TransectionHistory from "../features/dashboard/TransectionHistory";
import CurrencyCard from "../ui/CurrencyCard";
import InnerSectionHeader from "../ui/innerSectionHeader";
import MainHeading from "../ui/MainHeading";
import SectionHeader from "../ui/SectionHeader";


export default function Dashboard() {

    return (
        <div>
            <SectionHeader styles='py-15'>
                <MainHeading>Dashboard</MainHeading>
            </SectionHeader>
             <p className="font-bold text-[clamp(1rem,2vw,3rem)] text-blue-500">
                    Balance  
                </p>
           
            <div className="grid gap-10 py-5 grid-cols-4">
                <CurrencyCard/>
            </div>

            <div className="grid grid-cols-[3fr_2fr] max-md:grid-cols-1 gap-9">
                <div>
                    <InnerSectionHeader heading='Transection History' innerText='Updated every several minutes' />
                  <TransectionHistory />
                </div>
                
                <div className="max-md:w-full">
                    <InnerSectionHeader heading='Exchange rate' />
                    <div className="border border-gray-200 ">
                        <ExchangeRate />
                         <CurrencyChart/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}