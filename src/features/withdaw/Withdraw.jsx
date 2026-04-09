import MainHeading from "../../ui/MainHeading";
import { CiBank } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router";

export default function Withdraw() {
    return (
        <div className="border ">
            <MainHeading>Withdraw</MainHeading>
            <div className="flex">
                <div className="border text-center p-10  w-60">
                    <p className="flex justify-center">
                        &rarr;
                        <CiBank />
                    </p>
                    
                    Withdraw to bank
                </div>
                <div className="border p-10 w-60 ">
                    <p className="flex justify-center"><MdCurrencyExchange /></p>
                    <p>Convert currencies</p>
                </div>
               
            </div>
             <Link to='/account'>Manage bank account</Link>
        </div>
    )
}