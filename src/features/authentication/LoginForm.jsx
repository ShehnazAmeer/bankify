import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

export default function LoginForm() {
    return (
        <Form styles='border border-black '>
            <FormRow category='vertical'>
                <input type="text" className="input " />
            </FormRow>
            <FormRow category='vertical'>
                <input type='password'  className="input"/>
            </FormRow>
            <FormRow>
                <Button>Sign in</Button>
            </FormRow>
            <FormRow>
                <p>New to Bankify?</p>
                <Button>Sign up!</Button>
            </FormRow>
        </Form>
    )
}