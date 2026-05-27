
import { FiMenu } from "react-icons/fi";
import Menus from "../../ui/Menus";
import useSignout from "./useSignout"
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export default function Signout() {
    const { logout } = useSignout();
    
    function handleClick() {
        console.log('logout  clicked')
        logout();
    }
    return (
        <Menus>
            <Menus.Menu>
                <Menus.ToggleButton id='header-menu'>
                    <FiMenu/>
                </Menus.ToggleButton>
                
                <Menus.MenuList
                    id='header-menu'
                >
                    <Menus.MenuButton onClick={handleClick}>
                        <HiArrowRightOnRectangle className="mx-3" />
                        Signout
                    </Menus.MenuButton>
                </Menus.MenuList>
            </Menus.Menu>
        </Menus>
    )
}