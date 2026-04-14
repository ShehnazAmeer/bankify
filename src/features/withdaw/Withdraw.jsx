import { CiBank } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link} from "react-router";
import MainHeading from "../../ui/MainHeading";

export default function Withdraw() {
    return (
        <div>
            <MainHeading>Withdraw</MainHeading>
            <div className="grid grid-cols-4">
                <Link to='/withdraw/withdrawto' className="hover:bg-amber-500 bg-amber-50">
                    <div className="border flex flex-col items-center justify-center py-15"> 
                        <p className="text-2xl flex justify-center text-blue-500">
                          &rarr;
                          <CiBank className="w-10 h-10 text-blue-500  " />
                        </p>

                        <p >
                          Withdraw to bank
                        </p>

                    </div>
                </Link>
                <Link className="in-hover:bg-amber-500">
                    <div className="border flex flex-col items-center justify-center py-15">
                        <p className="flex justify-center">
                            <MdCurrencyExchange className="w-10 h-10 text-blue-500" />
                        </p>
                        <p>Convert currencies</p>
                    </div>
                </Link>
            </div>
             <Link to='/account'>Manage bank account</Link>
        </div>
    )
}