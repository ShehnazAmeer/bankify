export default function HomeTitle() {
    return (
       <section className='flex max-md:flex-col justify-between items-center px-10 pt-15  '>
            <div>
                <h1 className="max-md:text-center relative font-bold text-[clamp(1rem,3vw,12rem)] text-gray-700">
                    The All in One {" "} 
                    <span className="relative inline-block mb-4">
                        <span className="absolute inset-0 -z-10 opacity-70 transform scale-[1.07_1.05] skew-x-[-15deg]   bg-blue-500 "></span>
                        <span className="text-blue-50 ">Financial</span>
                    </span>
                    <br/>
                     {" "} Platform for {" "} 
                    <span className="relative inline-block mb-4">
                        <span className="absolute inset-0 -z-10 opacity-70 transform scale-[1.07_1.05] skew-x-[-15deg] bg-blue-500 text-blue-50"></span>
                        <span className="text-blue-50" >Borderless</span>
                    </span>
                    <br/>
                      {" "} Business and Global {" "} 
                    <span className="relative inline-block">
                        <span className="absolute inset-0 -z-10 opacity-70 transform scale-[1.07_1.05] skew-x-[-15deg] bg-blue-500 text-blue-50"></span>
                        <span className="text-blue-50">Payments</span>
                    </span>
                </h1>
                <p
                    className="text-[clamp(0.3rem,2vw,1.5rem)] py-15"
                >
                    Payoneer empowers millions of businesses with the financial tools and services they need to grow and transact globally with confidence.
                </p>
            </div>
             <img src='./cashier.jpg' className="rounded-full h-[clamp(20rem,40vw,60rem)] w-[clamp(25rem,50vw,70rem)]" />  
        </section>
    )
}