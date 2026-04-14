import MainHeading from "../../ui/MainHeading";

export default function AccountDetail() {
    return (
        <div>
            <MainHeading>Account detail</MainHeading>
            <div className="flex justify-between">
                <div className="flex gap-8">
                    <p>Your accounts</p>
                    <p>Multiple recipient account status</p>
                </div>
                <p>Add Account</p>
            </div>
            
            <div>
                Bank Account Details
            </div>
        </div>
    )
}