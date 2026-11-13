import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import MainHeading from '../../ui/MainHeading'
import { PiHandCoinsThin } from "react-icons/pi";

export function RequestType(){
    return(
        <Form>
            <MainHeading style='p-3 text-gray-700 '> I want new receiving accounts in </MainHeading>

            <FormRow category='horizental' styles=' px-5 '>
                    
                    <label className='flex cursor-pointer w-150 border text-gray-900 border-gray-100 py-5 mx-4'>
                        <PiHandCoinsThin className='mx-3 h-7 w-7' />
                        Currency I dont have yet
                        <input 
                            id='notHave' 
                            className='h-4 w-4 mx-10'
                            type='checkbox'
                         />
                    </label>
                   
               
            </FormRow>
        </Form>
    )
}