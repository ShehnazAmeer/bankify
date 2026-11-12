import { HiArrowsRightLeft } from "react-icons/hi2";
import { useState } from "react"
import Dropdown from "../../ui/Dropdown";
import Filter from "../../ui/Filter";
import useGetCurrency from "./useGetCurrency";
import CurrencyLineChart from './CurrencyLineChart'


export default function ExchangeRate() {
    const [base, setBase] = useState('USD');
    const [quote, setQuote] = useState('EUR');
    const [clickedOption, setClickedOption] = useState('1D');
    const { exchangeRate, isExchangeRateLoading } = useGetCurrency(base, quote);

    if (isExchangeRateLoading) return <p>loading...</p>
    return (
        <section>
            <div className="flex justify-center py-8 items-center">
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={base} onChange={setBase} optionStyles='text-xs' styles='rounded-md text-sm p-4' />
                <HiArrowsRightLeft className="mx-5 text-2xl" />
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={quote} onChange={setQuote} optionStyles='text-xs' styles='rounded-md text-blue-600 p-4' />
            </div>
            <p className="pb-4 font-bold">1 {exchangeRate[0]?.base}= {exchangeRate[0]?.rate} {exchangeRate[0]?.quote} </p>
            <div className="p-4">
                <Filter options={['1D', '7D', '30D', '90D']} clickedOption={clickedOption} setClickedOption={setClickedOption} />

                <CurrencyLineChart base={base} quote={quote} clickedOption={clickedOption} />
            </div>
        </section>
    )
}
