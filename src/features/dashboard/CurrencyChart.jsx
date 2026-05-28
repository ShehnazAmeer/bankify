import Filter from "../../ui/Filter";

export default function CurrencyChart() {
    return (
        <div className="py-4">
            <Filter options={['1D', '7D', '30D', '90D']} />
            currency chart
        </div>
    )
}