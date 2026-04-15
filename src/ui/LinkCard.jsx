import { Link } from "react-router";

export default function LinkCard({to,children,text}) {
    return (
       <Link to={to} className="bg-blue-50">
            <div className=" flex flex-col items-center justify-center h-40 py-10"> 
                <p className="text-md flex justify-center text-blue-500">
                 {children} 
                </p>

                <p >
                 {text}
                </p>
                
            </div>
    </Link>
    )
}