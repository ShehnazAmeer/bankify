import { NavLink } from "react-router";

export default function NavigationLinks({styles}) {
    return (
        <ul className={`${styles}`}>
            <li>
                <NavLink to='/dashboard'>Dashboard </NavLink>
            </li>
           
            <li>
                <NavLink to='/withdraw'>Withdraw Funds</NavLink>
            </li>
            <li>
                <NavLink to='/transfer'>Transfer Funds</NavLink>
            </li>
            <li>
                <NavLink to='/loan'>Loan Request</NavLink>
            </li>
            <li>
                <NavLink to='/orderCard'>Card</NavLink>
            </li>
             <li>
                <NavLink to='/manage'>Manage </NavLink>
            </li>
        </ul>
    )
}