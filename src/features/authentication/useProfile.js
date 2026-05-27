import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import { getUserProfile } from "../../services/apiProfile";

export default function useProfile() {
    const { user } = useUser();
    
   const {data:profile,error,isLoading:isProfileLoading}= useQuery({
       queryKey: ['profile',user?.id],
       queryFn: () => getUserProfile(user.id),
       enabled: !!user.id,
   });
    
    if (error) {
        throw new Error(error.message);
    }
    return {
        profile,
        isProfileLoading,
        error,
    }
}