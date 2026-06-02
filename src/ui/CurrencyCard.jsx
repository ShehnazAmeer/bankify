import { FaGreaterThan } from "react-icons/fa6";

import { formatCurrency } from "../utils/helpers";
import Flag from "./Flag";
import Button from './Button'
import { useNavigate } from "react-router";

export default function CurrencyCard({ account,children }) {
    const navigate=useNavigate();
    return (
        <div className="flex justify-between items-center border border-gray-200 px-3 py-8 rounded-md text-[clamp(0.5rem,2vw,1rem)] ">
            <div className="px-5 flex space-x-3 items-center">
                <Flag countryCurrency={account?.currencyCode} />
                <span> {formatCurrency(account?.balance)} </span>
                <span> {account?.currencyCode} </span>
            </div>
            {children}
        </div>
    )
}