import { FaArrowsRotate } from "react-icons/fa6";
import CurrencyChart from "../features/dashboard/CurrencyChart";
import ExchangeRate from "../features/dashboard/ExchangeRate";
import TransectionHistory from "../features/dashboard/TransectionHistory";
import Button from "../ui/Button";
import CurrencyCard from "../ui/CurrencyCard";
import InnerSectionHeader from "../ui/innerSectionHeader";
import MainHeading from "../ui/MainHeading";
import SectionHeader from "../ui/SectionHeader";
import AccountOverview from "../features/dashboard/AccountOverview";
import CurrencyOverview from "../features/dashboard/CurrencyOverview";


export default function Dashboard() {

    return (
        <div >
            <SectionHeader styles='py-15'>
                <MainHeading>Dashboard</MainHeading>
            </SectionHeader>
            <p className="font-bold text-[clamp(1rem,2vw,3rem)] text-blue-500">
                Balances
            </p>
            <AccountOverview />

            <div className="grid grid-cols-[3fr_2fr] max-md:grid-cols-1 gap-9 pb-20">
                <TransectionHistory />
                <CurrencyOverview />
            </div>
        </div>
    )
}