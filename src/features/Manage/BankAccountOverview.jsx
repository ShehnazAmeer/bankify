import { useNavigate } from "react-router";

import Button from "../../ui/Button";
import NavigateBackButton from '../../ui/NavigateBackButton';
import BankAccountCard from "./BankAccountCard";
import Modal from "../../ui/Modal";
import BankAccountDetail from "./BankAccountDetail";
import useWithdrawBankAccountsInfo from "../../hooks/useWithdrawBankAccountInfo";

export default function BankAccountOverview() {
    const navigate=useNavigate();
    const {withdrawBankAccounts,status}=useWithdrawBankAccountsInfo();

    console.log(status);
    console.log(withdrawBankAccounts);

    return (
        <section >
            <NavigateBackButton headingText='Bank Accounts' />
            <div className="flex mt-5 ">
                <Modal>
                    <Modal.Open openId='bankAccount'>
                        {
                            withdrawBankAccounts?.map(bankAccount=>  <BankAccountCard key={bankAccount.id} withdrawBankAccount={bankAccount} /> )
                        }
                       
                    </Modal.Open>
                    <Modal.Window>
                        <BankAccountDetail name='bankAccount'/>
                    </Modal.Window>
                </Modal>
            </div>
           
            <div className="flex flex-col justify-center items-center ">
                <Button category='primary' styles='p-3 mt-3 w-fit' onClick={()=>navigate('/manage/newBankAccount')} >
                    Add new account
                </Button>
            </div>
        </section>
    )
}