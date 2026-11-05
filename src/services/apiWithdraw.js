import supabase from "./supabase";

export async function createWithdrawal(newTransaction){
  const { data, error } = await supabase
  .from('Transactions')
  .insert([{ ...newTransaction}]);

  if(error){
    console.log(error.message)
  }
}