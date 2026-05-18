import { FaArrowsRotate } from "react-icons/fa6";
import Button from "../../ui/Button";
import InnerSectionHeader from "../../ui/innerSectionHeader";
import CurrencyChart from "./CurrencyChart";
import ExchangeRate from "./ExchangeRate";

export default function CurrencyOverview() {
    return (
        <div className="max-md:w-full">
            <InnerSectionHeader heading='Exchange rate' />
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