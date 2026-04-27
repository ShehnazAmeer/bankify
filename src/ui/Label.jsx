export default function Label({children,styles}) {
    return (
       <label 
            className={`absolute top-2 left-0 text-base text-gray-500 
                   transition-all duration-200 
                   peer-placeholder-shown:top-2 
                   peer-placeholder-shown:text-gray-400
                   peer-focus:-top-3 
                   peer-focus:text-gray-500 ${styles}`} >
            {children}
        </label>
    )
}