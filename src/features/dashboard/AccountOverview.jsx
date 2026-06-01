import { getCurrencyRates } from "../../services/apiDashboard";
import CurrencyCard from "../../ui/CurrencyCard";
import useGetAccounts from "./useGetAccounts";

export default function AccountOverview() {
    const { accounts, isLoadingAccounts } = useGetAccounts();

    if (isLoadingAccounts) return <p>Loading...</p>


    // console.log(accounts);
    return (
        <div className="grid gap-10 py-5 grid-cols-4">
            {
                accounts.map(account => <CurrencyCard account={account} key={account.id} />)
            }
        </div>
    )
}