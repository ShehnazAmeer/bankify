import { useMutation, useQueryClient } from "@tanstack/react-query";
import { udpateBankAccountBalance } from "../../services/apiBankAccounts";

export function useUpdateBalance(){
    console.log('called')
    const queryClient=useQueryClient()
    const {mutate:updateBalance,isPending}= useMutation({
        mutationFn:({id,withdrawData})=>udpateBankAccountBalance(id,withdrawData),
        onSuccess:(data)=>{
            queryClient.invalidateQueries(['user'])
        }
    })

    return {
        updateBalance,
        isPending,
    }
}