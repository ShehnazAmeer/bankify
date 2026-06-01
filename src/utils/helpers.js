export function getFlag(currency='JPY') {
    const countryCode = currency.toLowerCase().slice(0, 2);
    // console.log(countryCode);
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

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

export function getFormatDate(days) {
  // 2026-05-27
  console.log(days)
  const day = parseInt(days);

  const date = new Date();

  const updatedDate = date.setDate(date.getDate() - day);
  const formatedDate = new Date(updatedDate).toISOString().split('T')[0];

  return formatedDate;
}