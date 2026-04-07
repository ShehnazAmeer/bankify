import Logo from "./Logo";
import Button from "./Button";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
export default function Header() {
    const navigate=useNavigate()
    
    return (
        <header
            className="flex py-5 border justify-between w-full items-center "
        > 
            <Logo />
            <Navbar/>
            <span className="space-x-4 mr-3">
                
                <Button
                    category='primary'
                    styles='w-[clamp(3rem,8vw,10rem)] text-[clamp(0.5rem,2vw,2rem)] px-3 py-1'
                    onClick={()=>navigate('/login')}
                >
                    Login
                </Button>
                <Button
                    category='secondary'
                    styles='w-[clamp(3rem,8vw,10rem)] text-[clamp(0.5rem,2vw,2rem)] px-3 py-1'
                >Signup</Button>
            </span>
        </header>
    )
};


