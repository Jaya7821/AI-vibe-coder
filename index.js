import Layout from '../components/Layout';
import StatsCard from '../components/StatsCard';
import AnalyticsChart from '../components/AnalyticsChart';
import AISummary from '../components/AISummary';

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatsCard title="Users" value="1,240" />
        <StatsCard title="Revenue" value="$12,400" />
        <StatsCard title="Conversion Rate" value="4.2%" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <AnalyticsChart />
        <AISummary />
      </div>
    </Layout>
  );
}