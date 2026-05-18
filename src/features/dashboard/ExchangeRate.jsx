import InnerSectionHeader from "../../ui/innerSectionHeader";
import Button from "../../ui/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import Dropdown from "../../ui/Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Filter from "../../ui/Filter";

export default function ExchangeRate() {
    return (
        <section>
            <div className="flex justify-center py-8 items-center">
                <Dropdown options={['Eur', 'USd', 'JPY']} />
                <HiArrowsRightLeft className="mx-5 text-2xl" />
                <Dropdown  options={['Eur','USd','JPY']}/>
            </div>
            <p className="pb-4 font-bold">1 USD=03434Eur</p>
            <Filter options={['1D','7D','30D','90D']} />
        </section>
    )
}