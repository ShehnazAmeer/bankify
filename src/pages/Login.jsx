import LoginForm from '../features/authentication/LoginForm';
import BankifyImage from '../ui/BankifyImage';
import Logo from '../ui/Logo';
export default function Login() {
    return (
        <main className="grid grid-cols-[0.5fr_1fr] border border-black h-screen">
            <div className='flex flex-col border '>
                <Logo />
                <LoginForm />
            </div>
            <BankifyImage category='insideLogin'/>
        </main>
    )
}