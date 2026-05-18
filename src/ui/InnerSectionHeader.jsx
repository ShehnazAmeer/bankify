import SectionHeader from "./SectionHeader";

export default function InnerSectionHeader({ heading = '', children }) {

return (
         
        <SectionHeader>
            <h3 className="font-bold text-[clamp(1rem,1.5vw,3rem)] text-gray-900 py-5">
                {heading}
            </h3>
            {children}
        </SectionHeader> 
    )
}