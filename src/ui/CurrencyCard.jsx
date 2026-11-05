import { CiBank } from "react-icons/ci";
import { formatCurrency } from "../utils/helpers";
import Flag from "./Flag";
import { Link } from "react-router";

export default function CurrencyCard({type, account, children,showAvailable=false,category='',style, }) {
// type=balance,currency,
    return (
        <div
            className={`flex justify-between items-center border px-3 py-8 mb-2 rounded-md text-[clamp(0.5rem,2vw,1rem)] ${style} ${category === 'vertical' ? 'w-150' : ''} cursor-pointer`}
        >
            <Link
                to={`/withdraw/withdrawFunds`}
                state={account}
            >
            {
                type==='balance' && (
                <div className="px-5 flex space-x-3 items-center">
                    <Flag countryCurrency={account?.currencyCode} />

                    <div className={`flex ${category==='vertical'?'flex-col':'flex-row'}`}>
                        
                        {showAvailable && <span> {account?.currencyCode} balance </span>}
                        <span> {formatCurrency(account?.balance)} {account?.currencyCode} {showAvailable && 'available'} </span>
                    </div>
                </div>
                )
            }

            {
                type==='currency' && (
                    <div className='px-5  flex space-x-3 items-center'>
                        <section className='flex '>
                            <CiBank className="w-10 h-10 text-blue-500" />
                            <Flag style='h-5 w-5' countryCurrency={account?.BankAccountCurrency} />
                        </section>
                        <section>
                            <h3> {account?.bankName} </h3>
                        </section>
                    </div>
                )
            }


            </Link>
            {children}
        </div>
    )
}