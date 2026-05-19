import SignupForm from "../features/authentication/SignupForm";
import BankifyImage from "../ui/BankifyImage";
import Logo from "../ui/Logo";

export default function Signup() {
    return (
        <main className="flex max-md:flex-col h-screen">
            <div className='m-auto max-md:hidden'>
                <BankifyImage category='insideLogin' />
            </div>
            <div className='flex w-210 flex-col border-r border-r-gray-300 items-center  '>
                <Logo styles='mt-10' />
                <p>Enter your detail to create your account.</p>
                <SignupForm />
            </div>
        </main>
    )
}