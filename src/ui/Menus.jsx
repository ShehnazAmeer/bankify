import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

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
    const { openId, toggleButtonPosition, close } = useMenu();
    
    const ref = useOutsideClick();
    
    if (openId !== id) return null;

    return (
        createPortal(
            <ul ref={ref} style={{right:toggleButtonPosition.x,top:toggleButtonPosition.y}}>
                {children}
            </ul>,document.body
        )
    )
 }
function MenuButton({children}) {
    return (
        <li>
            {children}
        </li>
    )
 }
function ToggleButton({children}) {
    
}

function useMenu() {
    const context = useContext(MenusContext);
    if (context === undefined) throw new Error('Menu context outside of his provider');

    return context;
}

Menus.Menu = Menu;
Menus.MenuButton = MenuButton;
Menus.MenuList = MenuList;
Menus.ToggleButton = ToggleButton;