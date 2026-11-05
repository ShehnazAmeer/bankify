import { useState } from "react";
import Header from "../ui/Header";
import HomeTitle from "../ui/HomeTitle";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

export default function Home(){
    const[showNav,setShowNav]=useState(false);
    const navigate=useNavigate();
    function palindrom(num){
        const upNum=num.toString();
        console.log(upNum)
    }
    palindrom(121)
    return(
        <main>
            <Header showNav={showNav}/>
            <HomeTitle/>
            <section className="text-center py-15"> 
                <Button
                category='primary'
                styles='px-5 py-3 text-[clamp(0.5rem,2vw,8rem'
                onClick={()=>navigate('/login')}
                >
                    Get Started
                </Button>
            </section>
        </main>
    )
}