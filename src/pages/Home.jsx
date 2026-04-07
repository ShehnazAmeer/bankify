import { useNavigate } from "react-router";
import Button from "../ui/Button";
import Header from "../ui/Header";
import HomeTitle from "../ui/HomeTitle";
export default function Home() {
   const navigate= useNavigate();
    return (
        <div >
            <Header />
            <HomeTitle/>
            <section className=" text-center py-15">
                <Button
                    category='primary'
                    styles='px-5 py-3 text-[clamp(0.5rem,2vw,8rem)]'
                    onClick={()=>navigate('/dashboard')}
                >
                    Get started
                 </Button>
            </section>
           
        </div>
        
    )
}