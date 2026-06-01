import { useQuery } from "@tanstack/react-query";
import { getHistoricalCurrencyRate } from "../../services/apiDashboard";
import { getFormatDate } from "../../utils/helpers";

export default function useGetDateHistory(base, quote, date) {
    const formatedDate = getFormatDate(date);
    
    const { data: historyDate, isLoading: isHistoryDataLoading } = useQuery({
        queryKey: ['historyDate', base, quote, date],
        queryFn: () => getHistoricalCurrencyRate(base, quote, formatedDate),
        enabled: !!base && !!quote && !!date,
    });

    return {
        historyDate,
        isHistoryDataLoading,
    }
}