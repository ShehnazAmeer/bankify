import LinkCard from "../../ui/LinkCard";
import MainHeading from "../../ui/MainHeading";
import SectionHeader from "../../ui/SectionHeader";

export default function TransferDetail() {
    return (
        <div>
            <SectionHeader>
                 <MainHeading> Transfer</MainHeading>
            </SectionHeader>
           
            <div className="grid gap-10 py-5 grid-cols-4">
                <LinkCard text='Transfer to Bankify account'>
                    
                </LinkCard>
                <LinkCard text='Transfer to recipient bank account'>
                    
                </LinkCard>
                <LinkCard text='Batch payment to multiple Bankify accounts'>
                    
                </LinkCard>
                <LinkCard text='Batch payment to  multiple recipient bank accounts'>
                    
                </LinkCard>
                <LinkCard text='Pay VAT'>
                    
                </LinkCard>
            </div>
        </div>
    )
}