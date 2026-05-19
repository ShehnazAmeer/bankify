import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
    const { mutate: signup, isPending: isUserSignup } = useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            console.log(data);
            toast.success('User created successfully');
        },
        onError: () => {
            toast.error('Error occured while creating new user. Please try again later!');
        }
    });

    return {
        signup,
        isUserSignup
    }

}