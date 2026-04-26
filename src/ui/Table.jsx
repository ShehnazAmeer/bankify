import { createContext, useContext } from "react"

const TableContext=createContext();
export default function Tables({ children,columns }) {
    return (
        <TableContext.Provider value={{columns}}>
            {children}
        </TableContext.Provider>
    )
}

function Table({ children,styles }) { 
    return (
        <ul className={`${styles}`}>
         {children}
        </ul>
    )
    
}
function Row({ children,styles }) {
    const {columns}= useContext(TableContext);
    return (
        <li className={`grid grid-cols-${columns} ${styles}`}>
           {children}
        </li>
    )
}
function Column({children,styles}) {
    return (
        <div className={`${styles}`}>
            {children}
        </div>
    )
}
function Header() { }
function Footer() { }


Tables.Table = Table;
Tables.Row = Row;
Tables.Column = Column;
Tables.Header = Header;
Tables.Footer = Footer;