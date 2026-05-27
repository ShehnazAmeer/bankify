import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Signout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function useSignout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { mutate: logout, isPending: isLoggingOut } = useMutation({
        mutationFn: Signout,
        onError: () => {
            toast.error('Error occurred while login out user');
        },
        onSuccess: () => {
            toast.success('User logout successfully');
            queryClient.clear();
            navigate('/login');
        }
    });

    return {
        logout,
        isLoggingOut,
    }
}