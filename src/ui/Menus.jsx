import { createContext, useState } from "react"

const MenusContext = createContext();

export default function Menus({children}) {
    const [openId, setOpenId] = useState();
    const [toggleButtonPosition, setToggleButtonPosition] = useState(null);

    function open(id) {
        setOpenId(id);
    }

    function close() {
        setOpenId("");
    }

    return (
        <MenusContext.Provider value={{
            openId,
            open,
            close,
            toggleButtonPosition,
            setToggleButtonPosition,
        }}>
            {children}
        </MenusContext.Provider>
    )
}

function Menu({ children }) {
    return (
        <div>
            {children}
        </div>
    )
 }
function MenuList({ children, id }) {
    
 }
function MenuButton() { }
function ToggleButton(){}

Menus.Menu = Menu;
Menus.MenuButton = MenuButton;
Menus.MenuList = MenuList;
Menus.ToggleButton = ToggleButton;