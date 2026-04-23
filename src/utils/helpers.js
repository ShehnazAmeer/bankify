export function getFlag(currency='PKR') {
    const countryCode = currency.toLowerCase().slice(0, 2);
    console.log(countryCode);
    const flag=`https://flagcdn.com/${countryCode}.svg`
    return flag;
}

export function formatCurrency(value) {
    const formatted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
    }).format(value);
    return formatted;
}