import { Link } from "react-router";
import { createContext, useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";

import Button from "./Button"
import WithdrawFrom from "../features/withdaw/WithdrawFrom"
import WithdrawTo from "../features/withdaw/WithdrawTo"
import WithdrawalSetup from "../features/withdaw/WithdrawalSetup"
import WithdrawalDetail from "../features/withdaw/WithdrawalDetail"
import ReviewWithdraw from "../features/withdaw/ReviewWithdraw"

const StepContext = createContext();

export default function Steps({ children, labels }) {
    const [step, setStep] = useState(0);
    console.log(labels[step]);

    function handleNextStep() {
        if (step < labels.length - 1)
            setStep(s => s + 1);
    }
    return (
        <StepContext.Provider value={{
            labels,
            step,
            nextStep: handleNextStep,
        }}>
            {children}
        </StepContext.Provider>
    )
}

function Step({ children }) {
    return (
        <section className="grid grid-cols-[15rem_1fr] h-fit">
            {children}
        </section>
    )
}

function StepList() {
    const { labels } = useStep();
    return (
        <ul>
            {
                labels.map((label, i) => <StepText key={i} label={label} index={i} />)
            }
        </ul>
    )
}

function StepText({ label,index }) {
    const { step, labels } = useStep();

    return (
        <li className={`flex py-4 align-middle ${labels[step] === label ? 'text-blue-500' : 'text-gray-900'} ml-9`} >
            <span className="pr-5"> {index < step? <FaRegCheckCircle />: <GoDotFill />} </span>
            <span>{label}</span>
        </li>
    )
}

function Content({ children }) {
    const { step } = useStep();
    const steps = Array.isArray(children) ? children : [children];
    return (
        <div>
            {steps[step]}
        </div>
    )
}

function NextBtn() {
    const { nextStep } = useStep();
    return (
        <div className="col-span-2 h-fit flex justify-center">
             <Button category='primary' styles='py-4 px-9 border' onClick={nextStep}  >Next</Button>
        </div>
       
    )
}

function useStep() {
    const context = useContext(StepContext);
    if (context === undefined) throw new Error('Stpe used outside of its context');

    return context;
}



Steps.Step = Step;
Steps.StepList = StepList;
Steps.StepText = StepText;
Steps.NextBtn = NextBtn;
Steps.Content = Content;