import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";

export default function WithdrawalDetail() {
    const navigate = useNavigate();
    return (
        <section>
            <MainHeading>Add transaction details</MainHeading>
            <div>Form</div>
            <Button onClick={()=>navigate('')}>Next</Button>
        </section>
    )
}