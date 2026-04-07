import { Outlet } from "react-router";
import Header from "./Header";

export default function Applayout() {
    return (
        <section className="grid grid-cols-1 grid-rows-[auto_1fr] h-screen">
            <Header />
            <main className="bg-amber-400 w-full ">
                <Outlet/>
            </main>
        </section>
    )
}