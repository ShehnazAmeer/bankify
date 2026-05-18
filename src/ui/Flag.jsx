import { getFlag } from "../utils/helpers"

export default function Flag({countryCurrency=''}) {
     const flag=getFlag();
    return (
        <div className="h-10 w-10 rounded-full overflow-hidden ">
             <img className="w-full h-full object-cover" src={flag} alt={`flag`} />
        </div> 
    )
}