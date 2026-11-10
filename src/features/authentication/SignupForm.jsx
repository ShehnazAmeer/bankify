import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import useSignup from "./useSignup";
import { useForm } from "react-hook-form";

export default function SignupForm() {
    const navigate = useNavigate();
    const { signup, isUserSignup } = useSignup();
    const { register, handleSubmit, reset, formState, getValues } = useForm();
    const { errors } = formState;

    function handleSignin() {
        navigate('/login');
    }
    function handleSingup({ fullName, email, password,phoneNumber,avatar }) {
        const avatarFile=avatar[0]
        console.log(avatarFile)
        signup(
            { fullName, email, password,phoneNumber,avatarFile },
            { onSettled: () => reset() }
        )
    }
    return (
        <Form styles='w-100 pt-10' onSubmit={handleSubmit(handleSingup)}>
            <FormRow category='vertical' styles='relative mb-10'   >
                <input
                    id='fullName'
                    type='text'
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('fullName', { required: 'this field is required' })}
                />
                <Label>FullName</Label>
                {
                    errors?.fullName?.message && <p className="text-red-500"> {errors.fullName.message} </p>
                }
            </FormRow>
            <FormRow category='vertical' styles='relative mb-10'>
                <input
                    id='email'
                    type='email'
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('email', { required: 'This field is required', pattern: {value:/\S+@\S+\.\S+/, message:'Please enter valid email'} })}
                />
                <Label>Email</Label>
                {
                    errors?.email?.message && <p className="text-red-500" > {errors.email.message} </p>
                }
            </FormRow>
            <FormRow category='vertical' styles='relative mb-10'   >
                <input
                    id='phoneNumber'
                    type='tel'
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('phoneNumber', { required: 'this field is required' })}
                />
                <Label>Phone Number</Label>
                {
                    errors?.phoneNumber?.message && <p className="text-red-500"> {errors.phoneNumber.message} </p>
                }
            </FormRow>
            <FormRow category='vertical' styles='relative mb-10'>
                <input
                    id='password'
                    type='password'
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('password', { minLength: { value: 8, message: 'password must be 8 character long' }, required: 'This field is required' })}
                />
                <Label>Password</Label>
                {
                    errors?.password?.message && <p className="text-red-500"> {errors.password.message} </p>
                }
            </FormRow>
            <FormRow category='vertical' styles='relative mb-10'>
                <input
                    id='confirmPassword'
                    type='password'
                    className={`input py-3 focus:border-blue-500 border-b border-b-gray-300 peer`}
                    {...register('confirmPassword', { required: 'This field is required', validate: (value) => value === getValues().password || 'Password needs to match' })}
                />
                <Label>Confirm Password</Label>
                {
                    errors?.confirmPassword?.message && <p className="text-red-500"> {errors.confirmPassword.message} </p>
                }
            </FormRow>

            <FormRow category='vertical' styles='relative mb-10'>
                <input
                    id='avatar'
                    type='file'
                    accept='image/*'
                    className={`file:py-3 file:px-2 file:text-blue-50 file:bg-blue-400 focus:border-blue-500 `}
                    {...register('avatar', { required: 'This field is required'})}
                />
                {
                    errors?.avatar?.message && <p className="text-red-500"> {errors.avatar.message} </p>
                }
            </FormRow>

            <FormRow category='vertical' styles='relative mb-10'>
                <Button category='primary' styles='py-5' onClick={handleSubmit(handleSingup)} >Create Account</Button>
            </FormRow>
            <FormRow category='horizental'>
                <p className="pr-5">Already have an account?</p>
                <Button category='signup' onClick={handleSignin} >Signin!</Button>
            </FormRow>
        </Form>
    )
}