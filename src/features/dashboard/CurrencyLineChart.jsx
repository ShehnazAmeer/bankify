import { LineChart } from '@mui/x-charts/LineChart';
import useGetDateHistory from './useGetDateHistory';

export default function Chart({base,quote,clickedOption}) {
  const { historyDate, isHistoryDataLoading } = useGetDateHistory(base, quote, clickedOption);

  if(isHistoryDataLoading) return <p>Loading...</p>

  const dataset = historyDate?.map(item => ({
    x: new Date(item.date),
    y: item.rate,
  }));

  return (
    <LineChart
      className='w-100 h-20'
      dataset={dataset}
      xAxis={[{ scaleType: 'time', dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={200}
    />
  );
}