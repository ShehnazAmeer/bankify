import MainHeading from "../../ui/MainHeading";
import { useEffect, useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Dropdown from "../../ui/Dropdown";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { FaRegCheckCircle } from "react-icons/fa";
import useGetCurrency from "../dashboard/useGetCurrency";

export default function WithdrawalSetup({getWithdrawData}) {
    const [WithdrawBase,setWithdrawBase]=useState('USD');
    const [exchangedBase,setExchangedBase]=useState('Eur')
    const {handleSubmit,reset,formState,register,watch}=useForm();
    const withdrawAmount=watch('withdrawAmount');
    const location = useLocation();

    const {exchangeRate,isExchangeRateLoading}= useGetCurrency(WithdrawBase,exchangedBase);
    
    const withdrawalFee=(location?.state.withdrawalFee/100)*withdrawAmount;
    const amountAfterDeduction=withdrawAmount? withdrawAmount-withdrawalFee: '0.00';

    useEffect(function(){
        if(WithdrawBase>'0.00'){
            getWithdrawData({
                amountToWithdraw:parseFloat(withdrawAmount),
                amountToReceive:amountAfterDeduction,
                amountDedectedFrom:location?.state.balance,  
                senderAccountId:location?.state.accountNo,
                exchangeRate:exchangeRate,
            });
        }
            
    },[amountAfterDeduction])

    return (
        <div className="ml-10">
             <MainHeading style='text-[clamp(0.5rem,1.5vw,3rem)] py-5 '>Set up the withdrawal</MainHeading>
             <Form styles='h-fit w-150 '>
                <FormRow category='vertical' >
                    <label className='py-4'> Withdraw from {WithdrawBase} balance </label>
                    <div className='border text-gray-500 border-blue-300 w-fit'>
                        <input 
                            id='withdrawAmount'
                            type='number'
                            stpe='0.01'
                            placeholder='0.00'
                            className=' border-r border-blue-300 h-10' 
                            {...register('withdrawAmount',{required:'This field is required!'})}
                        />
                        <Dropdown 
                            styles='border-none' 
                            options={['EUR', 'USD', 'JPY', 'PKR']} 
                            value={WithdrawBase} 
                            onChange={setWithdrawBase} 
                        />
                    </div>
                    {
                        withdrawAmount && <p> <span className='text-gray-400' >{withdrawAmount} {location?.state.currencyCode} </span> - <span className='text-blue-400'>{location?.state.balance} {location?.state.currencyCode}</span> </p>
                    }
                    {
                        withdrawAmount && (
                            <>
                                <div className='flex items-center pl-3 text-gray-400'>
                                    <FaRegCheckCircle className='' />
                                    <div className='px-4  '>
                                        <p>Fee</p>
                                        <p> {withdrawalFee} USD ({location?.state.withdrawalFee}%) </p>
                                    </div>
                                </div>
                                <div className='flex items-center pl-3 text-gray-400'>
                                    <FaRegCheckCircle/>
                                    <div className='px-4'>
                                        <p >Amount After Fee</p>
                                        <p> {amountAfterDeduction} USD</p>
                                    </div>
                                </div>
                                <div className='flex items-center pl-3 text-gray-400'>
                                    <FaRegCheckCircle/>
                                    <div className='px-4'>
                                        <p>Exchange Rate</p>
                                        {
                                            isExchangeRateLoading? <p>loading...</p>: <p> 1.00 {location?.state.currencyCode} = {exchangeRate? `${exchangeRate[0]?.rate} ${exchangeRate[0]?.quote}`: 'loading...'} </p>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    }          
                   <label className='py-4'>Amount to receive</label>
                   <div className='border text-gray-500 border-blue-300 w-fit mb-10'>
                        <input
                            id='exchangedAmount'
                            type='number'
                            placeholder='0.00'
                            step='0.01'
                            readOnly
                            value={amountAfterDeduction}
                            {...register('exchangeAmount',{required:'This field is required!'})}
                            className='border-r border-blue-300 h-10 '
                        />
                        <Dropdown
                            styles='border-none'
                            options={['EUR', 'USD', 'JPY', 'PKR']} 
                            value={exchangedBase} 
                            onChange={setExchangedBase} 
                        />
                   </div>
                </FormRow>
             </Form>
        </div>
    )
}