import CurrencyCard from "../../ui/CurrencyCard";

export default function AccountOverview() {
    return (
        <div className="grid gap-10 py-5 grid-cols-4">
            <CurrencyCard />
            <CurrencyCard />
            <CurrencyCard />
        </div>

    )
}