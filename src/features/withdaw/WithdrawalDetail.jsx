
import MainHeading from "../../ui/MainHeading";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function WithdrawalDetail({getWithdrawData}) {
    const {register,watch}= useForm();
    const details=watch('description');

    useEffect(function(){
        if(details==='' || details===undefined) return
        getWithdrawData({
            description:details,
            review:true,
        })
    },[details])

    return (
        <section className="ml-10">
             <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Add transaction details</MainHeading>
            <Form styles='h-fit w-150'>
                <FormRow >
                    <textarea
                        id='description'
                        className="w-100  border border-blue-400 grow field-sizing-content min-h-10 max-h-50 text-gray-500"
                        placeholder='Description (optional)'
                        {...register('description')}
                    />
                    <p className="text-gray-500 mb-5">This description will appear in your Transaction page</p>
                </FormRow>
            </Form>
        </section>
    )
}