import { Link } from "react-router";

export default function BtnLink({children,to}) {
    return (
        <Link to={to}> {children} </Link>
    )
}