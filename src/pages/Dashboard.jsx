
import TransectionHistory from "../features/dashboard/TransectionHistory";
import MainHeading from "../ui/MainHeading";
import AccountOverview from "../features/dashboard/AccountOverview";
import CurrencyOverview from "../features/dashboard/CurrencyOverview";
import SectionHeader from "../ui/SectionHeader";
export default function Dashboard() {
    return (
        <div >
            <SectionHeader styles='py-15'>
                <MainHeading style='text-[clamp(1rem,2vw,3rem)]'>Dashboard</MainHeading>
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