import { FaGreaterThan } from "react-icons/fa6";

import { formatCurrency } from "../utils/helpers";
import Flag from "./Flag";
import Button from './Button'
import { Link } from "react-router";

export default function CurrencyCard({ account, children,showAvailable=false,category='',style, }) {

    return (
        <div
            className={`flex justify-between items-center border px-3 py-8 mb-2 rounded-md text-[clamp(0.5rem,2vw,1rem)] ${style} ${category === 'vertical' ? 'w-150' : ''} cursor-pointer`}
        >
            <Link
                to={`/withdraw/withdrawFunds`}
                state={account}
            >
                <div className="px-5 flex space-x-3 items-center">
                    <Flag countryCurrency={account?.currencyCode} />
                    <div className={`flex ${category==='vertical'?'flex-col':'flex-row'}`}>
                        {showAvailable && <span> {account?.currencyCode} balance </span>}
                        <span> {formatCurrency(account?.balance)} {account?.currencyCode} {showAvailable && 'available'} </span>
                    </div>
                    
                </div>
            </Link>
            {children}
        </div>
    )
}