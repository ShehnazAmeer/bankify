
import { GiCloudRing } from "react-icons/gi";
export default function Logo() {
    return (
        <section className="pl-5 flex items-center w-60 space-x-3">
           <h2 > <GiCloudRing className="text-blue-500 text-[clamp(4rem,2vw,13rem)]"/> </h2>
            <h3 className="font-bold tracking-widest text-gray-800 text-[clamp(2rem,3vw,15rem)] ">Bankify</h3>
        </section>
    )
}