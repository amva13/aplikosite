import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFire } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Reimagining discovery with the agentic AI data scientist — one virtual cell at a time.
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          ArcellAI (formerly Apliko) is building an AI data scientist and engineer that automates the hardest 80% of data workflows across research and industry. Our current focus is virtual cells: computational models transforming biology, medicine, and biomanufacturing.
        </p>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Why now?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>$1.3T+</strong> spent globally on data science labor annually, most of it on repetitive data tasks</li>
          <li><strong>$3.1T</strong> in global productivity lost due to data science inefficiencies and infrastructure debt</li>
          <li><strong>80%</strong> of data science time is spent on wrangling, integration, and pipeline work</li>
          <li><strong>Virtual cells</strong> are emerging as a high-growth, high-impact market in computational biology</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">What we’re building</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>End-to-end data agents that automate research workflows, from wrangling to advanced analytics</li>
          <li>Domain-specific ML integrations for single-cell biology and therapeutic discovery</li>
          <li>Modular architecture for adapting to any research vertical beyond virtual cells</li>
          <li>Interfaces that enable scientists to query, benchmark, and reason with complex data in natural language</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Traction</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>LOI(s)</li>
          <li>Live prototype ("<a href="https://apliko.io/blog" className="text-blue-600 hover:underline">VC-GPT</a>",) <a href="https://youtu.be/6SuFQszMr2Q" className="text-blue-600 hover:underline">demoed</a> publicly at calculus.house</li>
          <li>Founder previously built <a href="https://pytdc.apliko.io" className="text-blue-600 hover:underline">PyTDC</a>, an ICML-published virtual cells  AI platform with 30k MAU</li>
          <li>Signed regulatory counsel and founding engineer</li>
          <li>Confirmed interest from top accelerators and VCs</li>
          <li>In discussion with top medical school lab for collaboration</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">About the founder</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>built data & ml products accounting for $100M+ in revenue</li>
          <li>Open-sourced virtual cells AI platform with 30K+ MAU</li>
          <li>ICML-and-NeurIPS-published researcher in AI for biomedicine</li>
          <li>Formerly SWE at Pinterest and AI researcher at Harvard</li>
          <li>MIT BS Computer Science</li>
          <li><a href='https://alejandrovelez.com' className='text-blue-600 hover:underline'>Personal page</a> for Alejandro 'Alex' Velez-Arce</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Learn more</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><a href="https://apliko.io/blog" className="text-blue-600 hover:underline">calculus.house demo 1/3</a></li>
          <li><a href="https://apliko.io/blog-2" className="text-blue-600 hover:underline">calculus.house demo 2/3</a></li>
          <li><a href="https://apliko.io/demo-irsf" className="text-blue-600 hover:underline">Inventor's Residency SF (IRSF by The Residency) demo day</a></li>
          <li><a href="https://app.peachscore.com/company/apliko-inc/public" className="text-blue-600 hover:underline">Accelerator page</a> (deck, fundraising, team, etc.)</li>
        </ul>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/apliko-xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/company/apliko-io/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaLinkedin size={24} /></a>
          <a href="https://twitter.com/apliko_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter size={24} /></a>
          <a href="https://www.instagram.com/apliko_io/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition"><FaInstagram size={24} /></a>
          <a href="https://app.peachscore.com/company/apliko-inc/public" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition"><FaFire size={24} /></a>
        </div>
        Contact: <a href="mailto:founder@apliko.io" className="hover:underline">founder@apliko.io</a>
      </footer>
    </main>
  );
}
