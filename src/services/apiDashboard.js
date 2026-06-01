import supabase from "./supabase";
export async function getExchangeRates({ fromCur, toCur, date }) {
    const rates = await fetch(`https://api.frankfurter.dev/v2/rates?base=USD&quotes=EUR&from=2026-04-20 `, {
    });
    const data = await rates.json();
}

export async function getAccountsInfo(id) {

    const { data: accounts, error } = await supabase
        .from('Accounts')
        .select('*').eq('accountNo', id);

    if (error) {
        throw new Error(error.message);
    }

    return accounts
}

export async function getTransectionHistory(id) {
    const { data: transactions, error } = await supabase
        .from('Transactions')
        .select('*')
        .or(`senderAccountId.eq.${id},receiverAccountId.eq.${id}`);
    if (error) {
        throw new Error(error.message)
    }
    return {
        transactions,
        error,
    }
}


export async function getCurrencyRates(base, quote) {
    const res = await fetch(`https://api.frankfurter.dev/v2/rates?base=${base}&quotes=${quote}`);
    const data = await res.json();

    return data;
}

export async function getHistoricalCurrencyRate(base, quote,date) {

    const res = await fetch(`https://api.frankfurter.dev/v2/rates?from=${date}&base=${base}&quotes=${quote}`);

    const data = await res.json();

    return data;
}