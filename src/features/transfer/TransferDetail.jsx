import { GiCloudRing } from "react-icons/gi";
import LinkCard from "../../ui/LinkCard";
import MainHeading from "../../ui/MainHeading";
import SectionHeader from "../../ui/SectionHeader";
import { FaRegFile, FaRegUserCircle } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";

export default function TransferDetail() {
    return (
        <div>
            <SectionHeader>
                 <MainHeading> Transfer</MainHeading>
            </SectionHeader>
           
            <div className="grid gap-10 py-5 grid-cols-4 ">
                <LinkCard text={`Transfer to recipient's Bankify account`}>
                    &rarr;
                    <GiCloudRing className="text-blue-500 text-[clamp(1rem,2vw,3rem)]"/>
                </LinkCard>
                <LinkCard text={`Transfer to recipient's bank account`}>
                    &rarr;
                    <FaRegUserCircle />
                </LinkCard>
                <LinkCard text='Batch payment to multiple Bankify accounts'>
                    &rarr;
                    <FaLaptopFile />
                </LinkCard>
                <LinkCard text='Batch payment to  multiple recipient bank accounts'>
                    &rarr;
                    <MdAccountBalanceWallet />
                </LinkCard>
                <LinkCard text='Pay VAT'>
                    &rarr;
                    <FaRegFile />
                </LinkCard>
            </div>
        </div>
    )
}