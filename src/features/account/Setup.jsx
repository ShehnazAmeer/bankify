import { useState } from "react";
import Dropdown from "../../ui/Dropdown";
import FormRow from "../../ui/FormRow";
import MainHeading from "../../ui/MainHeading";

export default function Setup(){
    const[currencyIn,setCurrencyIn]=useState('')
    const[currencyFrom,setCurrencyFrom]=useState('')
    return(
        <section>
            <MainHeading style='py-5'>Choose new currencies and countries/regions for additional receiving accounts</MainHeading>
            <FormRow>
                <label >I want to receive bank transfers in</label>
                <div className='border my-5 text-gray-500 border-blue-300  w-fit'>
                    <input
                        id='currencyIn'
                        type='text'
                        value={currencyIn}
                        readOnly
                        className='border-r border-blue-300 pl-5 w-100 h-15'
                    />
                    <Dropdown
                        styles='border-none'
                        options={['EUR', 'USD', 'JPY', 'PKR']} 
                        value={currencyIn}
                        onChange={setCurrencyIn}
                    />
                </div>
                <label >I want to receive transfers from</label>
                <div className='border text-gray-500 border-blue-300 pl-5 my-5 w-fit'>
                    <input
                        id='currencyFrom'
                        type='text'
                        className='border-r border-blue-300 w-100 h-15'
                    />
                    <Dropdown
                        styles='border-none'
                        options={['EUR', 'USD', 'JPY', 'PKR']} 
                        value={currencyFrom}
                        onChange={setCurrencyFrom}
                    />
                </div>
            </FormRow>
        </section>
    )
}