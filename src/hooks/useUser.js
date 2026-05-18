import { useQuery } from "@tanstack/react-query";
import { getCurrentSession } from "../services/apiAuth";

export default function useUser() {
    const { data: userInfo, error: userError, isLoading: isUserLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentSession,
    })
    console.log(userInfo);

    return {
        serError,
        isUserLoading,
    }
}