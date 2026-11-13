import Steps from "../../ui/Steps";
import WithdrawFrom from "./WithdrawFrom";
import WithdrawTo from "./WithdrawTo";
import WithdrawalSetup from "./WithdrawalSetup";
import WithdrawalDetail from "./WithdrawalDetail";
import ReviewWithdraw from "./ReviewWithdraw";
import NavigateBackButton from "../../ui/NavigateBackButton";
import { useState } from "react";
import { useInitiateWithdrawal } from "./useInitiateWithdrawal";
import { useUpdateBalance } from "./useUpdateBalance";
import useUser from "../authentication/useUser";
import { useNavigate } from "react-router";

const labels = [
    'withdraw from',
    'Withdraw to',
    'Set up the withdrawal',
    'Add transaction details',
    'Review',
]

export default function WithdrawFunds() {
    const [withdrawData,setWithdrawData]=useState({});
    const {requestWithdrawl,isPending:isRequestingWithdraw} =useInitiateWithdrawal();
    const {updateBalance,isPending:isUpdatingBalnce} =useUpdateBalance();
    const {user}= useUser();
    

    function getWithdrawData(withdraw){
        setWithdrawData(withdrawData=> ({
            ...withdrawData,
            ...withdraw
        }))
    }

    function requestWithdraw(){
        requestWithdrawl({
            amount:withdrawData.amountToWithdraw,
            type: 'withdraw',
            status: 'pending',
            senderAccountId:withdrawData.senderAccountId,
            receiverAccountId:withdrawData.receiverAccountId,
            currency:withdrawData.currency,
            description:withdrawData.description,
        });
        updateBalance({id:user.id,withdrawData}) 
        setWithdrawData({});
    }
    return (
        <section>
            <NavigateBackButton headingText='withdraw to bank'/>
            <Steps labels={labels}>
                <Steps.Step>
                    <Steps.StepList />
                    <Steps.Content>
                        <WithdrawFrom />
                        <WithdrawTo getWithdrawData={getWithdrawData}/>
                        <WithdrawalSetup getWithdrawData={getWithdrawData} />
                        <WithdrawalDetail getWithdrawData={getWithdrawData} />
                        <ReviewWithdraw withdrawData={withdrawData} />
                    </Steps.Content>
                    <Steps.BtnContainer>
                        <Steps.StepBtn onClick={requestWithdraw} />
                    </Steps.BtnContainer>
                </Steps.Step>
            </Steps>
        </section>
    )
}