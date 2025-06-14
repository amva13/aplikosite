// components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white text-gray-900 font-sans">
      <aside className="w-64 bg-gray-100 border-r p-6 space-y-6">
        <h1 className="text-2xl font-bold">Apliko</h1>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-lg hover:underline">
            Home
          </Link>
          <Link href="/jobs" className="text-lg hover:underline">
            Jobs
          </Link>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
