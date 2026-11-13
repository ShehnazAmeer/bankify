import { useNavigate } from "react-router";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

export default function NavigateBackButton({headingText,children}) {
    const navigate= useNavigate();

    return (
        <SectionHeader styles='pt-15 border-b border-gray-300'>
            <Button category='basic' onClick={() => navigate(-1)} >
                <span className="p-4"> &larr;</span>
                <span> {headingText} </span>
            </Button>
            {children}
        </SectionHeader>
    )
}