import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Label from "../../ui/Label";

export default function LoginForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors, isSubmitting } = formState;
    const { userLogin, isLogin } = useLogin();

    function handleSignup() {
        navigate('/signup');
    }
    function onSubmit({ email, password }) {
        console.log('clicked');

        // if (!email && !password) return;

        userLogin(
            { email, password },
            { onSettled: () => reset() }
        )
    }
    return (
        <Form styles='w-90 pt-30' onSubmit={handleSubmit(onSubmit)}>
            <FormRow category='vertical' styles='relative mb-10' >
                <input
                    id='email'
                    disabled={isLogin}
                    type="text"
                    placeholder=" "
                    defaultValue="jarayi6888@hilostar.com"
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('email', { required: 'This field is required!', pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter valid email address' } })}
                />
                <Label> Email or username </Label>
                {
                    errors?.email?.message && <p> {errors.email.message} </p>
                }
            </FormRow>
            <FormRow category='vertical' styles='relative' >
                <input
                    id='password'
                    type='password'
                    placeholder=" "
                    disabled={isLogin}
                    defaultValue="12345678"
                    className="input py-3 focus:border-blue-500 border-b border-b-gray-300 peer mb-3"
                    {...register('password', { required: 'This field is required!' })}
                />
                <Label>Password</Label>
                {
                    errors?.password?.message && <p> {errors.password.message} </p>
                }
            </FormRow>
            <FormRow category='vertical'>
                <Button
                    type='submit'
                    category='primary'
                    styles='py-3 my-5'

                >
                    Sign in
                </Button>
            </FormRow>
            <FormRow category='horizental'>
                <p className="pr-5">New to Bankify?</p>
                <Button category='signup' onClick={handleSignup} >Sign up!</Button>
            </FormRow>
        </Form>
    )
}