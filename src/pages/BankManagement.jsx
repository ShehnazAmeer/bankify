import { MdOutlineCompareArrows } from "react-icons/md";
import LinkCard from "../ui/LinkCard";
import MainHeading from "../ui/MainHeading";
import SectionHeader from "../ui/SectionHeader";
import { CiBank } from "react-icons/ci";

export default function BankManagement() {
    return (
        <section>
            <SectionHeader>
                <MainHeading>
                    Manage
                </MainHeading>
            </SectionHeader>
            <div className="grid gap-10 py-5 grid-cols-4">
                <LinkCard to='/manage/bankmanagement' text='Bank accounts for withdrawal'>
                    <CiBank className="w-10 h-10 text-blue-500" />
                </LinkCard>

                <LinkCard to='/manage/transections' text='Transection'>
                    <MdOutlineCompareArrows className="w-10 h-10 text-blue-500" />
                </LinkCard>
           </div>
        </section>
    )
}