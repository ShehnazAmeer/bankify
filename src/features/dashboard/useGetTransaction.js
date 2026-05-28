import { useQuery } from "@tanstack/react-query";
import useUser from "../authentication/useUser";
import { getTransectionHistory } from "../../services/apiDashboard";

export default function useGetTransaction() {
    const { user } = useUser();

   const {data:transactions,isLoading:isTransactionLoading,error}= useQuery({
        queryKey: ['transactionHistory',user?.id],
        queryFn: () => getTransectionHistory(user?.id),
        enabled: !!user?.id,
   })
    if (error) {
        throw new Error(error.message)
    }
    return {
        transactions,
        isTransactionLoading,
    }
}
