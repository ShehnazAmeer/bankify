import { Link } from "react-router"
import Button from "./Button"
import { createContext, useContext, useState } from "react"
import WithdrawFrom from "../features/withdaw/WithdrawFrom"
import WithdrawTo from "../features/withdaw/WithdrawTo"
import WithdrawalSetup from "../features/withdaw/WithdrawalSetup"
import WithdrawalDetail from "../features/withdaw/WithdrawalDetail"
import ReviewWithdraw from "../features/withdaw/ReviewWithdraw"

const StepContext = createContext();

export default function Steps({children,labels}) {
    const [step, setStep] = useState(0);
    console.log(labels[step]);

    function handleNextStep() {
        if (step <labels.length - 1)
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

function Step({children}) {
    return (
        <section className="border grid grid-cols-[15rem_1fr] h-fit">
            {children}
        </section>
    )
}

function StepList() {
  const {labels}=  useStep();
    return (
        <ul>
            { 
                labels.map((label,i)=> <StepText key={i} label= {label} /> )
            }
        </ul>
    )
}

function StepText({label}) {
    return (
        <li> {label} </li>
    )
}

function Content({children}) {
    const { step } = useStep();
    const steps = Array.isArray(children) ? children : [children];
    return (
        <div>
            { steps[step]}
        </div>
    )
}

function NextBtn() {
   const {nextStep} = useStep();
    return (
        <Button onClick={nextStep}  >Next</Button>
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