import InnerSectionHeader from "../../ui/innerSectionHeader";
import Tables from "../../ui/Table";

export default function TransectionHistory({ heading, innerText }) {
    return (
        <div className="max-md:w-full">
            <InnerSectionHeader heading='Transection History'>
                <p className="pb-5">Updated every several minutes</p>
            </InnerSectionHeader>
            <div className="border border-gray-200">
                <Tables columns={1}>
                    <Tables.Table >
                        <Tables.Row styles='space-x-5 border-b-2 border-gray-100 py-5'>
                            <div className="flex justify-between ">
                                <div className="flex items-center px-5">
                                    <Tables.Column styles='pr-5'>
                                        Column1
                                    </Tables.Column>
                                    <Tables.Column>
                                        Column2
                                    </Tables.Column>
                                </div>
                                <div className="flex items-center px-5">
                                    <Tables.Column styles='pr-5'>
                                        Column3
                                    </Tables.Column>
                                    <Tables.Column>
                                        Column4
                                    </Tables.Column>
                                </div>
                            </div>
                        </Tables.Row>
                        <Tables.Row styles='space-x-5 border-b-2 border-gray-100 py-5'>
                            <div className="flex justify-between ">
                                <div className="flex items-center px-5">
                                    <Tables.Column styles='pr-5'>
                                        Column1
                                    </Tables.Column>
                                    <Tables.Column>
                                        Column2
                                    </Tables.Column>
                                </div>
                                <div className="flex items-center px-5">
                                    <Tables.Column styles='pr-5'>
                                        Column3
                                    </Tables.Column>
                                    <Tables.Column>
                                        Column4
                                    </Tables.Column>
                                </div>
                            </div>
                        </Tables.Row>
                    </Tables.Table>
                </Tables>
            </div>

        </div>
    )
}