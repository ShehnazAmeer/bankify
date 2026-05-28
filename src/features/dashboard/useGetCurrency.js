import { useQuery } from "@tanstack/react-query";
import { getCurrencyRates } from "../../services/apiDashboard";

export default function useGetCurrency(base, quote) {
    const { data: exchangeRate, isLoading: isExchangeRateLoading, isError } = useQuery({
        queryKey: ['currencyRate', base, quote],
        queryFn: () => getCurrencyRates(base, quote),
        enabled: !!base && !!quote,
    });
    return {
        exchangeRate,
        isExchangeRateLoading,
    }
}