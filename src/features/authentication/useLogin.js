import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
    const navigate= useNavigate();
    
    const {mutate:userLogin,isPending:isLogin } =useMutation({
        mutationFn: ({ email, password }) => signin( {email,password}),
        onSuccess: (data) => {
            console.log(data);
            toast.success('User Successfully login');
             navigate('/dashboard');
        },
        onError: (error) => {
            toast.error(error.message)
            throw new Error(error.message)
        }
    })
        return{
            userLogin,
            isLogin,
        }
}