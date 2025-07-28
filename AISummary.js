import { useEffect, useState } from 'react';

export default function AISummary() {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch("/api/summary")
      .then(res => res.json())
      .then(data => setSummary(data.summary));
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h4 className="text-lg font-semibold mb-2">AI Summary</h4>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
}