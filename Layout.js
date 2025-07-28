export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow p-4">
        <h1 className="text-xl font-bold mb-6">Analytics Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Reports</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}