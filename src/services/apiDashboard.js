export async function getExchangeRates({fromCur,toCur,date}) {
    const rates = await fetch(`https://api.frankfurter.dev/v2/rates?base=USD&quotes=EUR&from=2026-04-20 `, {
        
    });
    const data = await rates.json();
console.log(data);
}

export function getBalance() {
}