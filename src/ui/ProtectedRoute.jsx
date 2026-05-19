import { useEffect } from "react";
import useUser from "../features/authentication/useUser"
import Spinner from "./Spinner";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
    const { user, isLoadingUser, isAuthenicated } = useUser();
    const navigate = useNavigate();

    useEffect(function () {
        if (!isAuthenicated && !isLoadingUser)
            navigate('/login');
    }, [isAuthenicated, isLoadingUser, navigate])

    if (isLoadingUser)
        return <Spinner />

    if (isAuthenicated)
        return children
}