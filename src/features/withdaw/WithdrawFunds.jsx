import { useNavigate } from "react-router";
import Steps from "../../ui/Steps";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";

export default function WithdrawFunds() {
    const navigate= useNavigate();
    return (
        <section className="border border-red-500 ">
            <SectionHeader>
                <Button onClick={()=>navigate(-1)} >&larr; Withdraw to bank</Button>
            </SectionHeader>
            <Steps>
                <Steps.Step>
                    <Steps.StepList />
                    <Steps.Content />
                    <Steps.NextBtn/>
                </Steps.Step>
            </Steps>
        </section>
    )
}