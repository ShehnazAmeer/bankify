import { PiGreaterThan } from "react-icons/pi";
import InnerSectionHeader from "../../ui/innerSectionHeader";
import Tables from "../../ui/Table";
import { formatCurrency, formatDate } from "../../utils/helpers";
import useGetTransaction from "./useGetTransaction";
import useUser from "../authentication/useUser";

export default function TransectionHistory() {
    const { transactions: data, isTransactionLoading } = useGetTransaction();
    const {user} = useUser();
    
    if (isTransactionLoading) return <p>Loading...</p>
    const {transactions } = data;
    return (
        <div className="max-md:w-full">
            <InnerSectionHeader heading='Transection History'>
                <p className="pb-5">Updated every several minutes</p>
            </InnerSectionHeader>
            <div className="border border-gray-200">
                <Tables columns={1}>
                    <Tables.Table >
                        {
                            transactions.map(transaction => (
                                <Tables.Row styles='space-x-5 border-b-2 border-gray-100 py-5' key={transaction.id}>
                                    <div className="flex justify-between ">
                                        <div className="flex items-center px-5">
                                            <Tables.Column styles='pr-5'>
                                                {formatDate(transaction.created_at)}
                                            </Tables.Column>
                                            <Tables.Column>
                                                {`${user.id===transaction.senderAccountId? 'Wthdrawal':'Deposit'} | ` }
                                                
                                                {transaction.status}
                                            </Tables.Column>
                                        </div>
                                        <div className="flex items-center px-5">
                                            <Tables.Column styles='pr-5'>
                                                {`${user.id===transaction.senderAccountId? formatCurrency(-transaction.amount):formatCurrency(transaction.amount)}`}
                                            </Tables.Column>
                                            <Tables.Column>
                                               <PiGreaterThan />
                                            </Tables.Column>
                                        </div>
                                    </div>
                                </Tables.Row>
                            ) )
                        }
                    </Tables.Table>
                </Tables>
            </div>

        </div>
    )
}