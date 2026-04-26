import { useState } from "react";
import Button from "./Button";

export default function Filter({ options }) {
    const [clickedOption, setClickedOption] = useState();
    
    function handleClick(value) {
        setClickedOption(value)
        console.log(value)
    }
    return (
        <div className="flex ">
            {
                options.map(option => (
                    <Button
                        key={option}
                        styles={`px-5 mx-2 rounded-full active:border cursor-pointer py-2 ${clickedOption===option?'border':''}`}
                        onClick={()=> handleClick(option)}
                    >
                        {option}
                    </Button>
                ))
            }
        </div>
    )
}