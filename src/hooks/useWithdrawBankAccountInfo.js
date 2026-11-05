import { useQuery } from "@tanstack/react-query";
import { fetchBankAccounts } from "../services/apiBankAccounts";

export default function useWithdrawBankAccountsInfo(){
  const {data:withdrawBankAccounts,error,status}=  useQuery({
        queryKey:['withdrawBankAccounts'],
        queryFn: fetchBankAccounts
    })

    return {
        withdrawBankAccounts,
        error,
        status,
        
    }
}