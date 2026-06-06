import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";

export default function ReviewWithdraw() {
    return (
        <section>
             <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Review</MainHeading>
            <div>Form</div>
            <Button>Withdraw</Button>
        </section>
    )
}