import { BsBank } from "react-icons/bs";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";
import SectionHeader from "../../ui/SectionHeader";
import { useState } from "react";
import AccountCard from "./AccountCard";
import { Link } from "react-router";

export default function AccountDetail() {
    const [isOpen, setIsOpen] = useState(false);
    function handleIsOpen() {
        setIsOpen(open => !open);
    }
    return (
        <div>
            <SectionHeader>
                <MainHeading>Bank Accounts</MainHeading>
            </SectionHeader>
            
            <div className="flex justify-between">
                <div className="flex gap-8">
                    <Button>Your accounts</Button>
                    <Button>Multiple recipient account status</Button>
                </div>
                <Link to='/addnewAccount' >Add new account</Link>
            </div>
            <AccountCard onClick={handleIsOpen} />
            {
                isOpen && <AccountDetail/>
            }
        </div>
    )
}