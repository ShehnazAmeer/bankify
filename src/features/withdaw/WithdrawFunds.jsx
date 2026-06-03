import { useNavigate } from "react-router";
import Steps from "../../ui/Steps";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import WithdrawFrom from "./WithdrawFrom";
import WithdrawTo from "./WithdrawTo";
import WithdrawalSetup from "./WithdrawalSetup";
import WithdrawalDetail from "./WithdrawalDetail";
import ReviewWithdraw from "./ReviewWithdraw";

const labels = [
    'withdraw from',
    'Deposit to',
    'Set up the withdrawal',
    'Add transaction details',
    'Review',
]

export default function WithdrawFunds() {
    const navigate= useNavigate();
    return (
        <section className="border border-red-500 ">
            <SectionHeader styles='py-15'>
                <Button category='basic' onClick={() => navigate(-1)} >
                    <span className="p-4"> &larr;</span>
                    <span> Withdraw to bank</span>
                   
                </Button>
            </SectionHeader>
            <Steps labels={labels}>
                <Steps.Step>
                    <Steps.StepList />
                    <Steps.Content>
                        <WithdrawFrom />
                        <WithdrawTo />
                        <WithdrawalSetup />
                        <WithdrawalDetail />
                        <ReviewWithdraw/>
                    </Steps.Content>
                    <Steps.NextBtn/>
                </Steps.Step>
            </Steps>
        </section>
    )
}