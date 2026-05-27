import { FiMenu } from "react-icons/fi";
import { HiArrowRightOnRectangle} from "react-icons/hi2";
import Menus from "../../ui/Menus";
import useProfile from "./useProfile"
import Signout from "./Signout";


export default function UserAvatar() {
    const { profile, isProfileLoading } = useProfile();

    if(isProfileLoading) return <p>loading...</p>

    return (
        <div className="mr-5 flex justify-center items-center ">
            <img
                className="h-15 w-15  rounded-full border border-gray-200"
                src={profile?.avatar}
                alt={`${profile?.fullName}-profile`}
            />
            <p className="px-5">|</p>
            <h2  className="mr-2">
                Welcome {profile?.fullName}
            </h2>
            <Signout/>
        </div>
    )
}