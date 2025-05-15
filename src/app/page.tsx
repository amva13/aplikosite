import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">Apliko</h1>
      </header>

      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Building intelligent systems for a healthier, more sustainable world.
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Apliko is a product-centered AI research lab focused on building LLM agents in health and sustainability.
        </p>
        {/* change nums here for columns */}
        <div className="grid md:grid-cols-2 gap-6"> 
          {/* <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🧠 MedGuide</h3>
            <p className="text-gray-600 mb-4 text-sm">
              AI Copilot for Clinical Decision Support.
            </p>
            <a
              className="text-blue-600 font-medium hover:underline cursor-pointer"
              href="https://scholar.google.com/scholar?oi=bibs&cluster=17622846334429665412&btnI=1&hl=en"
            >
              Learn more →
            </a>
          </div> */}

          <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🛍️ LuxeAI</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Multi-agent shopping companion that delivers voice-activated, taste-aware curation of affordable health, fashion, and sustainable products 
            </p>
            <Link href="/wip" className="text-blue-600 font-medium hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🧬 TrinityAI</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Scientific superintelligence to automate core research workflows across biology, chemistry, and materials science
            </p>
            <Link href="https://www.calculus.house/alex-velez-arce" className="text-blue-600 font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        Contact: founder@apliko.io
      </footer>
    </main>
  );
}
