import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFire } from 'react-icons/fa';

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900 font-sans">

        <section className="px-6 py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Building scientific superintelligence via an agentic data scientist
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We are a product-centered, engineering-driven, AI research lab focused on building vertical AI agents solving data science and domain-specific workflows across domains. We are an innovation engine, creating foundational AI agent architectures that can be rapidly tailored and deployed across diverse industry challenges.
          </p>
          {/* change nums here for columns */}
          <div className="grid md:grid-cols-3 gap-6"> 
            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🧠 GrowthGuard</h3>
              <p className="text-gray-600 mb-4 text-sm">
                RAG-enabled agentic clinical decision support system for differential diagnoses, specialist referrals, and more.
              </p>
              <a
                className="text-blue-600 font-medium hover:underline cursor-pointer"
                href="https://github.com/amva13/growth-llm"
              >
                Learn more →
              </a>
            </div>

            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🛍️ Luxe</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Multi-agent recommender system deployed in sustainable, longevity-focused, shopping.  
              </p>
              <Link href="/wip" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🧬 Trinity</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Scientific superintelligence to automate core research workflows across therapeutics.
              </p>
              <Link href="https://www.calculus.house/alex-velez-arce" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </section>
        <section className="px-6 py-20 text-center max-w-3xl mx-auto">
          <h4 className="text-4xl md:text-5xl font-semibold mb-6">
            Open-source Community Projects
          </h4>
          <p className="text-lg text-gray-600 mb-10">
            Projects by community members built open-source and available to all.
          </p>
          {/* change nums here for columns */}
          <div className="grid md:grid-cols-1"> 

            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">🤖 PyTDC</h3>
              <p className="text-gray-600 mb-4 text-sm">
              A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models 
              </p>
              <Link href="https://pytdc.apliko.io/" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        <footer className="text-center py-8 text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/apliko-xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/apliko-io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://app.peachscore.com/company/apliko-inc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <FaFire size={24} />
          </a>
        </div>
          Contact: <a href="mailto:founder@apliko.io" className="hover:underline">founder@apliko.io</a> 
        </footer>
      </main>
  );
}
