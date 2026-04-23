import { getFlag } from "../utils/helpers"

export default function Flag({countryCurrency=''}) {
     const flag=getFlag();
    return (
        <div className="border h-16 w-16 rounded-full overflow-hidden ">
             <img className="w-full h-full object-cover" src={flag} alt={`flag`} />
        </div> 
    )
}