import MainHeading from "../../ui/MainHeading";

export default function TransferDetail() {
    return (
        <div>
            <MainHeading> Transfer</MainHeading>
            <div className="flex">
                <div className="border text-center p-10  w-60">
                    <p className="flex justify-center">
                       Transfer to Bankify account
                    </p>
                </div>
                <div className="border p-10 w-60 ">
                    <p className="flex justify-center"></p>
                    <p>Transfer to recipient bank account</p>
                </div>
                <div className="border p-10 w-60 ">
                    <p className="flex justify-center"></p>
                    <p> Batch payment to multiple Bankify accounts </p>
                </div>
                <div className="border p-10 w-60 ">
                    <p className="flex justify-center"></p>
                    <p> Batch payment to  multiple recipient bank accounts </p>
                </div>
                <div className="border p-10 w-60 ">
                    <p className="flex justify-center"></p>
                    <p> Pay VAT </p>
                </div>
            </div>
        </div>
    )
}