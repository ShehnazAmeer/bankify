import supabase from "./supabase";

export async function fetchBankAccounts(){
    const{data:bankAccounts,error}=await supabase
    .from('bankAccounts')
    .select('*');

    if(error)
        throw new Error(error.message);

    return bankAccounts;

}

export async function udpateBankAccountBalance(id,withdrawData){
console.log('called Api account')
const updatedBalance=Number(withdrawData?.amountDedectedFrom) - Number(withdrawData?.amountToWithdraw);
console.log(updatedBalance)
const { data, error } = await supabase
  .from('Accounts')
  .update({ 'balance': updatedBalance })
  .eq('accountNo', id)
  .eq('currencyCode',withdrawData.currency)
  .select()
  .single()

  if(error){
    throw new Error(error.message)
  }

  console.log(data)

  return data;
}