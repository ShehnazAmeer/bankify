import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import Button from './Button';

const MenusContext = createContext();

export default function Menus({children}) {
    const [openId, setIsOpenId] = useState("");
    const [togglePosition, setTogglePosition] = useState();

    function open(id) {
        setIsOpenId(id);
    }

    function close() {
        setIsOpenId("");
    }
    return (
        <MenusContext.Provider value={{
            openId,
            open,
            close,
            togglePosition,
            setTogglePosition,
        }}>
            {children}
        </MenusContext.Provider>
    )
}
function ToggleButton({ children, id }) {
    const { setTogglePosition,open,close,openId } = useMenu();

    function handleClick(e) {
        console.log('Toggle Button Clicked');
        e.stopPropagation();

        const rect = e.target.getBoundingClientRect();

        setTogglePosition({
            x: rect.right-150,
            y: rect.top+25,
            
        })

        openId === '' || openId !== id ? open(id) : close();

    }
    
    return (
        <Button onClick={handleClick}>
            {children}
        </Button>
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
    const { openId, togglePosition, close } = useMenu();
    
    const ref = useOutsideClick(close, false);

    if (id !== openId) return null;

    return (
        createPortal(
            <ul
                className="fixed rounded-md py-3 w-31 bg-gray-100"
                ref={ref}
                style={{left:togglePosition.x,top:togglePosition.y}}
            >    
                {children}
            </ul>,document.body
        )
       
    )
 }
function MenuButton({ children, onClick }) {
    return (
        <Button onClick={onClick}>
            <li className="flex justify-center items-center my-3">
                {children}
            </li>
        </Button>
   )
 }

function useMenu() {
    const context = useContext(MenusContext);
    if (context === undefined) throw new Error('Context used outside of its provide');

    return context;
}

Menus.Menu = Menu;
Menus.MenuButton = MenuButton;
Menus.MenuList = MenuList;
Menus.ToggleButton = ToggleButton;