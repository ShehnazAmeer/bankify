import { CiBank } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link} from "react-router";
import MainHeading from "../../ui/MainHeading";
import SectionHeader from "../../ui/SectionHeader";
import LinkCard from "../../ui/LinkCard";

export default function Withdraw() {
    return (
        <div>
            <SectionHeader>
                 <MainHeading>Withdraw</MainHeading>
           </SectionHeader>
           
            <div className="grid grid-cols-4 gap-5">
                <LinkCard to='/withdraw/withdrawFunds' text=' Withdraw to bank'>
                    &rarr;
                    <CiBank className="w-10 h-10 text-blue-500  " />
                </LinkCard>

                <LinkCard to='/' text='Convert currencies'>
                     <MdCurrencyExchange className="w-10 h-10 text-blue-500" />
                </LinkCard>
               
            </div>
             <Link to='/account'>Manage bank account</Link>
        </div>
    )
}