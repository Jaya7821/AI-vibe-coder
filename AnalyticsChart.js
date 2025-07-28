import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 210 },
  { name: 'Mar', value: 300 },
];

export default function AnalyticsChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}