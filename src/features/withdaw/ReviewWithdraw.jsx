import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import MainHeading from "../../ui/MainHeading";

export default function ReviewWithdraw({withdrawData}) {
    return (
        <section className="ml-10">
            <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Review</MainHeading>
            <Form styles='h-fit w-150 '>
                <FormRow styles={'border border-gray-100 mb-3 p-5'}>
                <h3 className="pb-4 ">Withdraw from</h3>
                <p className="text-gray-400"> { withdrawData?.currency? `${withdrawData?.currency} Balance`:'loading' || '' } </p>
                </FormRow>
                <FormRow styles={'border border-gray-100 mb-3 p-5'}>
                    <h3 className="pb-4">Deposit to</h3>
                    <p className="text-gray-400"> {  withdrawData?.receiverAccountName? `${withdrawData?.receiverAccountName}`:'loading' ||'' } </p>
                </FormRow>
                <FormRow styles={'border border-gray-100 mb-3 p-5'}>
                    <h3 className="pb-4">Setup the withdrawal</h3>
                    <FormRow>
                        <p className="text-gray-400">Amount to withdraw</p>
                        <p> {`${withdrawData?.amountToWithdraw} ${withdrawData?.currency}` || ''} </p>
                    </FormRow>
                    <FormRow>
                        <p className="text-gray-400">Exchange Rate</p>
                        <p> { `1.00 ${withdrawData?.currency} = ${withdrawData?.exchangeRate[0]?.rate}` ||'' } </p>
                        <p>includes Payoneer conversion fee</p>
                    </FormRow>
                    <FormRow>
                        <p className="text-gray-400">Amount to deposit</p>
                        <p> {withdrawData?.amountToReceive ||''} </p>
                    </FormRow>
                    <FormRow>
                        <p className="py-3">Funds should arrive within 1 business Day</p>
                    </FormRow>
                </FormRow>
                <FormRow styles={'border border-gray-100 mb-3 p-5'}>
                    <h3 className="pb-4">Transaction Detail</h3>
                    <p className="text-gray-400"> {withdrawData?.description? withdrawData?.description:'' }</p>
                </FormRow>
            </Form>
        </section>
    )
}