import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import { useNavigate } from "react-router";

export default function LoginForm() {
    const navigate=useNavigate()
    function handleSignup() {
        navigate('/signup')
    }
    return (
        <Form styles='w-90 pt-30'>
            <FormRow category='vertical' styles='relative mb-10' >
                <input
                    type="text"
                    placeholder=" "
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                />
                <Label> Email or username </Label>
            </FormRow>
            <FormRow category='vertical' styles='relative' >
                <input
                    type='password'
                    placeholder=" "
                    className="input py-3 focus:border-blue-500 border-b border-b-gray-300 peer"
                />
                <Label>Password</Label>
            </FormRow>
            <FormRow category='vertical'>
                <Button category='primary' styles='py-3 my-5' >Sign in</Button>
            </FormRow>
            <FormRow category='horizental'>
                <p className="pr-5">New to Bankify?</p>
                <Button category='signup' onClick={handleSignup} >Sign up!</Button>
            </FormRow>
        </Form>
    )
}