import { BsBank } from "react-icons/bs";
import { RiArrowRightWideLine } from "react-icons/ri";
import Button from "../../ui/Button"

export default function BankAccountCard({withdrawBankAccount}) {
    
    const {bankName,bankStatus,bankAccountType,bankIban}=withdrawBankAccount;

    return (
        <div className="flex items-center border w-120 p-4" >
            <div className="border w-15 h-15 mr-3 rounded-full object-cover flex justify-center items-center" >
                <BsBank className="w-8 h-8" />
            </div>

            <div className="grow flex flex-col text-left pl-4 justify-items-start ">
                <h3 className="py-4 font-bold"> {bankName} </h3>
                <p className="rounded-full w-20 bg-blue-600 text-blue-50 text-center p-1 "> {bankAccountType} </p>
                <p>Account Number</p>
                <p className="border-b border-gray-400"> {bankIban} </p>
                <p> {bankStatus} </p>
            </div>
            <Button category='basic' styles='self-center px-4'>
                <RiArrowRightWideLine className="text-2xl text-gray-700" />
            </Button>
        </div>
    )
}