import { getFlag } from "../utils/helpers"

export default function Flag({countryCurrency='',style='h-10 w-10'}) {
     const flag=getFlag(countryCurrency);
    return (
        <div className={`rounded-full overflow-hidden ${style} `} >
             <img className="w-full h-full object-cover" src={flag} alt={`flag`} />
        </div> 
    )
}