import { createContext, useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import Button from "./Button"

const StepContext = createContext();

export default function Steps({ children, labels }) {
    const [step, setStep] = useState(0);
    // console.log(labels[step]);

    function handleNextStep() {
        if (step < labels.length - 1)
            setStep(s => s + 1);
    }
    function handlePreviousStep(){
        if(step!==0)
            setStep(s=>s-1)
    }
    return (
        <StepContext.Provider value={{
            labels,
            step,
            nextStep: handleNextStep,
            previousStep:handlePreviousStep,
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
        <ul >
            {
                labels.map((label, i) => <StepText key={i} label={label} index={i} />)
            }
        </ul>
    )
}

function StepText({ label,index }) {
    const { step, labels } = useStep();
    return (
        <li 
            className={`flex py-4 align-middle ${labels[step] === label ? 'text-blue-500' : 'text-gray-900'} ml-9`} 
        >
            <span className="pr-5"> {index < step? <FaRegCheckCircle />: <GoDotFill />} </span>
            <span>{label}</span>
        </li>
    )
}

function Content({ children }) {
    const { step } = useStep();
    const steps = Array.isArray(children) ? children : [children];
    return (
        <div >
            {steps[step]}
        </div>
    )
}

function BtnContainer({children}){
    return(
        <div className='gap-5 center flex w-3xl justify-center'>
            {children}
        </div>
    )
}

function StepBtn({onClick}) {
    const { nextStep,step,labels} = useStep();
    // console.log(labels[step])
    return (
        <div className="col-span-2 h-fit flex justify-center">
             <Button category='primary' styles='py-4 px-15 border' onClick={labels[step]!=='Review'?nextStep:onClick}  >
                {
                    labels[step]!=='Review'? 'Next':'Withdraw'
                }
             </Button>
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
Steps.StepBtn = StepBtn;
Steps.Content = Content;
Steps.BtnContainer=BtnContainer;