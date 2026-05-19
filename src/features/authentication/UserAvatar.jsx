import useUser from "./useUser"

export default function UserAvatar() {
    const { user } = useUser();
    console.log(user)

    return (
        <div className="mr-5 flex justify-content items-center ">
            <img
                className="h-15 w-15  rounded-full border border-gray-200"
                src="/avatar2.jpg"
                alt='userPic'
            />
            <p className="px-5">|</p>
            <h2>
                Welcome x
            </h2>
        </div>
    )
}