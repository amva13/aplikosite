import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFire, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900 font-sans">

        <section className="px-6 py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Building scientific superintelligence for autonomous data science and engineering. 
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Backed by top accelerators, we are pioneering the future of autonomous scientific research in biomedical sciences, quantitative marketing, and financial engineering.
          </p>
          {/* change nums here for columns */}
          <div className="grid md:grid-cols-3 gap-6"> 
            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">calculus.house - The Residency</h3>
              <p className="text-gray-600 mb-4 text-sm">
              Launching in San Francisco this June, Calculus provides curious minds with biotech-labspace, a hackerhouse and a research-community.
              </p>
              <a
                className="text-blue-600 font-medium hover:underline cursor-pointer"
                href="https://www.calculus.house/"
              >
                Learn more →
              </a>
            </div>

            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Tampa Bay Wave - CORE ELP</h3>
              <p className="text-gray-600 mb-4 text-sm">
              What started as a meetup in 2008 has evolved into Florida’s #1 Accelerator and tech startup support organization.
              </p>
              <Link href="https://www.tampabaywave.org/core-membership/" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="border rounded-2xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Peachscore</h3>
              <p className="text-gray-600 mb-4 text-sm">
              Peachscore + Dealum is the world's first and largest data-driven accelerator platform, where advanced technology meets human expertise to revolutionize startups.
              </p>
              <Link href="https://app.peachscore.com/company/apliko-inc" className="text-blue-600 font-medium hover:underline">
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
              <h3 className="text-xl font-semibold mb-2">PyTDC (ICML 2025)</h3>
              <p className="text-gray-600 mb-4 text-sm">
              A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models. 
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
          <a
            href="https://www.instagram.com/apliko_io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/apliko_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>
          Contact: <a href="mailto:founder@apliko.io" className="hover:underline">founder@apliko.io</a> 
        </footer>
      </main>
  );
}
