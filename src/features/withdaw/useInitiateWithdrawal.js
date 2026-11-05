import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWithdrawal } from "../../services/apiWithdraw";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useInitiateWithdrawal(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();

   const {mutate:requestWithdrawl,isPending}= useMutation({
        mutationFn:transaction=>createWithdrawal(transaction),
        onError: () => {
            toast.error('Error occurred Performing Withdrawal request');
        },
        onSuccess: () => {
            toast.success('Withdrawal Request Submited Successfully');
            queryClient.clear();
            navigate('/dashboard');
        }
    });

    return{
        requestWithdrawl,
        isPending,
    }
}