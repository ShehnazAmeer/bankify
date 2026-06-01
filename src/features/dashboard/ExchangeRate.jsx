import { FaArrowsRotate } from "react-icons/fa6";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { useState } from "react"
import InnerSectionHeader from "../../ui/innerSectionHeader";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import Filter from "../../ui/Filter";
import useGetCurrency from "./useGetCurrency";
import CurrencyChart from "./CurrencyChart";
import useGetDateHistory from "./useGetDateHistory";
import CurrencyLineChart from './CurrencyLineChart'


export default function ExchangeRate() {
    const [base, setBase] = useState('USD');
    const [quote, setQuote] = useState('EUR');
    const [clickedOption, setClickedOption] = useState('1D');
    const { exchangeRate, isExchangeRateLoading } = useGetCurrency(base, quote);
   const {historyDate,isHistoryDataLoading}= useGetDateHistory(base,quote,clickedOption)

    if (isExchangeRateLoading) return <p>loading...</p>

    console.log(historyDate)
    return (
        <section>
            <div className="flex justify-center py-8 items-center">
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={base} onChange={setBase} />
                <HiArrowsRightLeft className="mx-5 text-2xl" />
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={quote} onChange={setQuote} />
            </div>
            <p className="pb-4 font-bold">1 {exchangeRate[0]?.base}= {exchangeRate[0]?.rate} {exchangeRate[0]?.quote} </p>
            <div className="p-4">
                <Filter options={['1D', '7D', '30D', '90D']} clickedOption={clickedOption} setClickedOption={setClickedOption} />

                <CurrencyLineChart base={base} quote={quote} clickedOption={clickedOption} />
            </div>
        </section>
    )
}
