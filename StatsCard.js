export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}