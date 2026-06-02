import { useNavigate } from "react-router";
import useGetAccounts from "../dashboard/useGetAccounts"
import CurrencyCard from "../../ui/CurrencyCard";

export default function WithdrawFrom() {
    const { accounts, isLoadingAccounts } = useGetAccounts();
    return (
        
        <div>
             {
                accounts.map(account => (
                    <CurrencyCard account={account} key={account.id}/>)
                ) 
            }
        </div>
    )
}