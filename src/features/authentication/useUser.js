import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export default function useUser() {
    const { data: user, isLoading: isLoadingUser, error } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser

    });
    if (error) {
        throw new Error(error.message);
    }
    return {
        user,
        isLoadingUser,
        isAuthenicated: user?.role === 'authenticated'
    }
}