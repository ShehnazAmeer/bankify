import { Link } from "react-router";

export default function LinkCard({to,children,text}) {
    return (
       <Link to={to} className="bg-blue-50">
            <div className=" flex flex-col items-center justify-center h-40 py-10 text-[clamp(0.8rem,1vw,1rem)]"> 
                <p className="text-md flex justify-center text-[clamp(1rem,1vw,2rem)] text-blue-500">
                 {children} 
                </p>

                <p >
                 {text}
                </p>
                
            </div>
    </Link>
    )
}