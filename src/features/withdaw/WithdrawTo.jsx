import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";

export default function WithdrawTo() {
    const navigate= useNavigate();
    return (
        <section>
            <MainHeading>Withdraw to</MainHeading>
            <div>
                Bank Detail
                <Button onClick={()=>navigate('/')} >Next</Button>
            </div>
        </section>
    )
}