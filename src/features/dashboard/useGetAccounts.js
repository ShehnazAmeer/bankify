import { useQuery } from "@tanstack/react-query";
import useUser from "../authentication/useUser";
import { getAccountsInfo } from "../../services/apiDashboard";

export default function useGetAccounts() {
    const { user } = useUser();
    
   const {data:accounts=[],isLoading:isLoadingAccounts,error}= useQuery({
        queryKey: ['accounts', user?.id],
        queryFn: ()=> getAccountsInfo(user?.id),
        enabled:!!user.id,
   });
    if (error) {
        throw new Error(error.message);
    }
    return {
        accounts,
        isLoadingAccounts,
    }
}