import { useNavigate } from "react-router";
import CurrencyCard from "../../ui/CurrencyCard";
import useGetAccounts from "./useGetAccounts";
import Button from "../../ui/Button";
import { FaGreaterThan } from "react-icons/fa6";


export default function AccountOverview() {
    const { accounts, isLoadingAccounts } = useGetAccounts();
    const navigate=useNavigate();

    if (isLoadingAccounts) return <p>Loading...</p>


    // console.log(accounts);
    return (
        <div className="grid gap-10 py-5 grid-cols-4">
            {
                accounts.map(account => (
                    <CurrencyCard account={account} key={account.id}>
                        <Button onClick={()=>navigate('/withdraw')}> <FaGreaterThan /></Button>
                    </CurrencyCard>)
                ) 
            }
        </div>
    )
}