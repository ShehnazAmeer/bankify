import { useState } from "react";
import Dropdown from "../../ui/Dropdown";
import FormRow from "../../ui/FormRow";
import MainHeading from "../../ui/MainHeading";
import Button from '../../ui/Button'
import Flag from "../../ui/Flag";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Setup(){
    const[currencyIn,setCurrencyIn]=useState('')
    const[currencyFrom,setCurrencyFrom]=useState('')
    const [open,setIsOpen]=useState(false);
    console.log(open)
    return(
        <section className='relative z-10'>
            <MainHeading style='py-5'>Choose new currencies and countries/regions for additional receiving accounts</MainHeading>
            <FormRow >
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
                <div className='border z-20 relative my-5 text-gray-500 border-blue-300  w-fit'>
                    <input
                        id='currencyFrom'
                        type='text'
                        className='border w-100 h-15'
                    />
                    <Button onClick={()=>setIsOpen(open=>!open)}>
                        {
                            open? <IoMdArrowDropup />:<IoMdArrowDropdown />
                        } 
                    </Button>
                    {
                        open && (
                            <ul className='absolute top-full left-0 z-50 scroll-y h-30 w-104 bg-white'>
                                <li className="flex py-3 pl-3 space-x-3">
                                    <input
                                        type='checkbox'
                                    />
                                    <Flag countryCurrency="PKR" style='w-5 h-5' />
                                    <span>Pakistan</span>
                                </li>
                                <li className="flex py-3 pl-3 space-x-3">
                                    <input
                                        type='checkbox'
                                    />
                                    <Flag countryCurrency="Euro" style='w-5 h-5' />
                                    <span>European</span>
                                </li>
                                <li className="flex py-3 pl-3 space-x-3">
                                    <input
                                        type='checkbox'
                                    />
                                    <Flag countryCurrency="USA" style='w-5 h-5' />
                                    <span>United States</span>
                                </li>
                            </ul>
                        )
                    }
                    
                </div>
            </FormRow>
        </section>
    )
}