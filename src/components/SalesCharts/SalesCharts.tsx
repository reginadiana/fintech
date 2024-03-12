import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Sale } from 'src/context/DataContext';

const CHARTS_MOCK = [
  {
    data: '2023-05-03',
    pago: 300000,
    processando: 30000,
    falha: 2000,
  },
  {
    data: '2023-05-04',
    pago: 440000,
    processando: 60000,
    falha: 2000,
  },
  {
    data: '2023-05-05',
    pago: 440000,
    processando: 30000,
    falha: 1000,
  },
];

type Props = {
  sales: Sale[];
};

export default function SalesCharts({ sales }: Props) {
  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart data={CHARTS_MOCK}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
