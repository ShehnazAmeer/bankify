import { useLocation,} from "react-router";
import useGetAccounts from "../dashboard/useGetAccounts"
import CurrencyCard from "../../ui/CurrencyCard";
import MainHeading from "../../ui/MainHeading";

export default function WithdrawFrom() {
    const { accounts, isLoadingAccounts } = useGetAccounts();
    const location = useLocation();

    if(isLoadingAccounts) return <p>Loading...</p>
    return (
        <div className="ml-10"> 
            <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Withdraw from</MainHeading>
             {
                accounts.map(account => (
                    <CurrencyCard category='vertical' style={`${location?.state?.id===account.id?"border border-blue-500":'border-gray-200'} `} account={account} showAvailable={true} key={account.id}/>)
                ) 
            }
        </div>
    )
}