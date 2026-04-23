import { formatCurrency } from "../utils/helpers";
import { FaGreaterThan } from "react-icons/fa6";
import Flag from "./Flag";

export default function CurrencyCard() {
    return (
        <div className="flex justify-between items-center px-3 py-5 bg-blue-50 rounded-md text-[clamp(0.5rem,2vw,1rem)] ">
            <div className="px-5 flex space-x-3 items-center">
                <Flag countryCurrency='JPY' />
                <span> {formatCurrency('500')} </span>
                <span> USD </span>
            </div>
            <div className="text-[clamp(1rem,1vw,2rem)]"> <FaGreaterThan /> </div>
        </div>
    )
}