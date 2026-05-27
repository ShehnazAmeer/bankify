import { formatCurrency } from "../utils/helpers";
import { FaGreaterThan } from "react-icons/fa6";
import Flag from "./Flag";

export default function CurrencyCard({ account }) {
    return (
        <div className="flex justify-between items-center border border-gray-200 px-3 py-8 rounded-md text-[clamp(0.5rem,2vw,1rem)] ">
            <div className="px-5 flex space-x-3 items-center">
                <Flag countryCurrency={account?.currencyCode} />
                <span> {formatCurrency(account?.balance)} </span>
                <span> {account?.currencyCode} </span>
            </div>
            <div className="text-[clamp(1rem,1vw,2rem)]"> <FaGreaterThan /> </div>
        </div>
    )
}