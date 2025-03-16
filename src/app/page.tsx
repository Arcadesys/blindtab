import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-bold mb-6">BlindTab</h1>
      <p className="text-2xl mb-8">
        A music application designed for users with low vision
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link 
          href="/songs" 
          className="p-8 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <h2 className="text-3xl font-semibold mb-4">Songs</h2>
          <p className="text-xl">Browse and manage your song collection</p>
        </Link>
        <Link 
          href="/tags" 
          className="p-8 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <h2 className="text-3xl font-semibold mb-4">Tags</h2>
          <p className="text-xl">Organize songs by categories</p>
        </Link>
      </div>
    </main>
  );
}
