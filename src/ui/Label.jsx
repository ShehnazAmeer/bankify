export default function Label({children,styles}) {
    return (
       <label 
            className={`absolute top-3 left-0 text-base text-gray-500 
                   transition-all duration-200 
                   peer-placeholder-shown:top-2 
                   peer-placeholder-shown:text-gray-400
                   peer-focus:-top-3 
                   peer-focus:text-gray-500 peer-not-placeholder-shown:-top-3
           peer-[&:not(:placeholder-shown)]:text-sm" ${styles}`} >
            {children}
        </label>
    )
}