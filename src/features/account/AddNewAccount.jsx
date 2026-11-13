import Button from "../../ui/Button";
import NavigateBackButton from "../../ui/NavigateBackButton";
import Steps from "../../ui/Steps";
import { RequestType } from "./RequestType";
import Review from "./Review";
import Setup from "./Setup";
const labels=[
    'Request type',
    'Setup',
    'Review'
]
export default function AddNewAccount() {
    return (
        <section>
            <NavigateBackButton headingText='dashbaord' >
                <h1 className='py-5'>Request receiving accounts</h1>
            </NavigateBackButton>
            <Steps labels={labels}>
                <Steps.Step>
                    <Steps.StepList/>
                    <Steps.Content>
                        <RequestType/>
                        <Setup/>
                        <Review/>
                    </Steps.Content>
                    <Steps.BtnContainer>
                        <Steps.StepBtn/>
                    </Steps.BtnContainer>
                </Steps.Step>

            </Steps>
        </section>
    )
}



