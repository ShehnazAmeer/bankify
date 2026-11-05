import MainHeading from "../../ui/MainHeading";
import useWithdrawBankAccountsInfo from "../../hooks/useWithdrawBankAccountInfo";
import { Link, useLocation } from "react-router";
import CurrencyCard from "../../ui/CurrencyCard";
import { useEffect } from "react";

export default function WithdrawTo({getWithdrawData}) {
    const {withdrawBankAccounts,status}=useWithdrawBankAccountsInfo();
    const location=useLocation();

        
    useEffect(function(){
        if(status==='success'){
                getWithdrawData({
                receiverAccountId:withdrawBankAccounts[0].bankIban,
                receiverAccountName:withdrawBankAccounts[0].bankName,
                currency:location?.state.currencyCode,
        })
        }
        
    },[withdrawBankAccounts]);

    return (
        <div className="ml-10">
            <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)]  py-5 '>Withdraw to</MainHeading>
            {
                withdrawBankAccounts?.map(withdrawAccount=>(
                    <CurrencyCard 
                    type='currency'
                    category='vertical'
                    account={withdrawAccount} 
                    key={withdrawAccount?.profileId}
                    style={`${location?.state?.id===withdrawAccount.id?"border border-blue-500":'border-gray-200'} `} 
                    />
                ))
            }
        </div>
    )
}