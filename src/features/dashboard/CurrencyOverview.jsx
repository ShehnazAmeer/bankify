import { FaArrowsRotate } from "react-icons/fa6";
import Button from "../../ui/Button";
import CurrencyChart from "./CurrencyChart";
import ExchangeRate from "./ExchangeRate";
import SectionHeader from "../../ui/SectionHeader";

export default function CurrencyOverview() {
    return (
        <div className="max-md:w-full">
            <SectionHeader>
                <h3 className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-900 py-5">
                    Exchange rate
                </h3>
            </SectionHeader> 
            <div className="flex">
                <p className="pr-5 pb-5">Last Updated: time</p>
                <Button category='basic'> <FaArrowsRotate /></Button>
            </div>

            <div className="border border-gray-200 ">
                <ExchangeRate />
                <CurrencyChart />
            </div>

        </div>
    )
}