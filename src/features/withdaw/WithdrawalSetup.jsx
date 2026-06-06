import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";

export default function WithdrawalSetup() {
    const navigate= useNavigate();
    return (
        <div>
             <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Set up the withdrawal</MainHeading>
            <div>Form</div>
            <Button onClick={()=>navigate('')}>Next</Button>
        </div>
    )
}