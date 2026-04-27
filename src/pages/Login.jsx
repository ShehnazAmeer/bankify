import LoginForm from '../features/authentication/LoginForm';
import BankifyImage from '../ui/BankifyImage';
import Logo from '../ui/Logo';
export default function Login() {
    return (
        <main className="flex max-md:flex-col h-screen">
            <div className='flex w-210 flex-col border-r border-r-gray-300 items-center  '>
                <Logo styles='mt-10' />
                <LoginForm />
            </div>
            <div className='m-auto max-md:hidden'>
                 <BankifyImage category='insideLogin'/>
            </div>
           
        </main>
    )
}