import InnerSectionHeader from "../../ui/innerSectionHeader";
import Button from "../../ui/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import Dropdown from "../../ui/Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Filter from "../../ui/Filter";
import { useState } from "react";
import useGetCurrency from "./useGetCurrency";

export default function ExchangeRate() {
    const [base, setBase] = useState('USD');
    const [quote, setQuote] = useState('EUR');
    const { exchangeRate, isExchangeRateLoading } = useGetCurrency(base, quote);

    if (isExchangeRateLoading) return <p>loading...</p>

    return (
        <section>
            <div className="flex justify-center py-8 items-center">
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={base} onChange={setBase} />
                <HiArrowsRightLeft className="mx-5 text-2xl" />
                <Dropdown options={['EUR', 'USD', 'JPY', 'PKR']} value={quote} onChange={setQuote} />
            </div>
            <p className="pb-4 font-bold">1 {exchangeRate[0]?.base}= {exchangeRate[0]?.rate} {exchangeRate[0]?.quote} </p>
        </section>
    )
}
