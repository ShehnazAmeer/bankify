import { createContext, isValidElement, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export default function Modal({children}) {
    const [isOpenId, setIsOpen] = useState("");
    function open(id) {
        setIsOpen(id);
    }
    function close() {
        setIsOpen("")
    }
    return (
        <ModalContext.Provider value={{
            isOpenId,
            open,
            close,
           
        }}>
            {children}
        </ModalContext.Provider>
    )
}

function Window({ children, name }) {
    const { isOpenId,close } = useModal();
    if (isOpenId !== name) return null;

    return (
        createPortal(
            (
                <div className="border border-red-500 fixed">
                    <div>
                        {
                            Children.map(children, child => {
                            if (!isValidElement(child)) return child;
                            return cloneElement(child,{onClick})
                            })
                        }
                    </div>
                </div>
            ),document.body
        )
        
    )
}

function Open({ children, openId }) {
    const { open } = useModal();

    return (
        <Button category='basic' onClick={()=>open(openId)} >
            {children}
        </Button>
    )
}

function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('Context used outside of its provider')
    }
    return context;
}
Modal.Open = Open;
Modal.Window = Window;