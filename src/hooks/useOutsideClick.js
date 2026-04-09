import { useEffect, useRef } from "react";

export default function useOutsideClick({onClick,listenCapturingType=true}) {
    const ref = useRef();
    
    useEffect(function () {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) onClick()
        }
        document.addEventListener('click', handleClick, listenCapturingType);

        return document.removeEventListener('click', handleClick, listenCapturingType);
    }, [onClick, listenCapturingType]);

    return ref;
}