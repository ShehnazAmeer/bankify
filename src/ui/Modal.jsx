import { createContext, useState } from "react";

const ModalContext = createContext();

export default function Modal({children}) {
    const [isOpen, setIsOpen] = useState();
    return (
        <ModalContext.Provider value={{
             isOpen,
            setIsOpen,
        }}>
            {children}
        </ModalContext.Provider>
    )
}