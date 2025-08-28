import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFire } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* New Button */}
      <div className="w-full text-center py-4 bg-gray-100">
        <a
          href="https://arcell.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-black text-white font-medium text-sm rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Visit our new website
        </a>
      </div>

      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
         Multi-omic data science AI agents
        </h1>
        <p className="text-lg text-gray-600 mb-10">
        ArcellAI aspires to be the universal engine of multi-omics analytics and automated experimentation , empowering AI-driven scientists to accelerate transformative discoveries across bioengineering and life sciences , where data fuels boundless innovation.
        </p>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Our thesis</h2>
        <p className="text-lg text-gray-600 mb-10">
        In a world where biotech is exploding into a data powerhouse, betting on multi-omic big data fused with agentic AI isn't just smart—it's essential. This convergence is set to grab a skyrocketing share of the massive bioengineering space, with ArcellAI at the forefront, automating analytics and experiments to supercharge breakthroughs in life sciences and far beyond.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>$5.71T Biotechnology</strong> global market by 2034</li>
          <li><strong>$762.73B Bioengineering</strong> technology market by 2032</li>
          <li><strong>$190.98B Big data analytics</strong> in biotech by 2034</li>
          <li><strong>$1.3T+</strong> spent globally on data science labor annually, most of it on repetitive data tasks</li>
          <li><strong>$3.1T</strong> in global productivity lost due to data science inefficiencies and infrastructure debt</li>
          <li><strong>80%</strong> of data science time is spent on wrangling, integration, and pipeline work</li>
          <li><strong>40% CAGR agentic ai in biotech</strong> enabling automated experimentation and genomic analysis</li>
          <li><strong>54% CAGR agentic ai in scientific discovery</strong> particularly in biotech for multi-omic integration and virtual simulations</li>
        </ul>

      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">What we’re building</h2>
        <p className="text-lg text-gray-600 mb-10">
        We're crafting a game-changing AI platform that acts as the ultimate data scientist for multi-omics and beyond, automating complex analytics and experiments to fuel breakthroughs in biotech and engineering with unmatched speed and precision.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Self-Driving Research Pipelines</strong>: Fully automated workflows that handle everything from raw multi-omic data to actionable insights, powered by a planner-executor-critic system for robust, repeatable results.</li>
          <li><strong>Multi-Omic Powerhouse</strong>: Seamlessly integrates genomics, proteomics, metabolomics, and imaging data to drive discoveries in synthetic biology, enzyme design, and virtual cell modeling.</li>
          <li><strong>Smart AI Reasoning</strong>: Agents equipped with biological knowledge graphs, foundation models, and experimental logic to propose hypotheses, design experiments, and interpret complex results</li>
          <li><strong>Rock-Solid Reproducibility</strong>: Tracks every step, parameter, and decision with persistent memory, ensuring auditable, transparent science.</li>
          <li><strong>Scalable Modular Design</strong>: Plug-and-play architecture adapts to biotech, materials science, precision fermentation, and more, with flexibility to tackle new domains.</li>
          <li><strong>Scientist-Friendly Interface</strong>: Intuitive natural-language tools let researchers query, visualize, and steer intricate datasets without coding expertise.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-10">
         
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why it matters</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Traditional tools struggle with fragmented multi-omics and manual pipelines.</li>
          <li>ArcellAI transforms that by offering a reusable, self-driving data scientist across life sciences.</li>
          <li>The platform’s agentic design enables scaling from enzyme makers to virtual-cell researchers—and ultimately to any domain facing complex data and experimental cycles.</li>
          <li><strong>75-90% failure rate in general AI deployments</strong> in specialized domains like biomedicine. ArcellAI is equipped with the domain expertise guaranteeing successful deployments.</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Traction & team</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>LOI(s)</li>
          <li>Live prototype ("<a href="https://apliko.io/blog" className="text-blue-600 hover:underline">VC-GPT</a>",) <a href="https://youtu.be/6SuFQszMr2Q" className="text-blue-600 hover:underline">demoed</a> publicly at calculus.house</li>
          <li>Founder previously built <a href="https://pytdc.apliko.io" className="text-blue-600 hover:underline">PyTDC</a>, an ICML-published virtual cells  AI platform with 30k MAU</li>
          <li>Signed regulatory counsel and founding engineer</li>
          <li>Term sheets received and confirmed interest from top accelerators and VCs</li>
          <li>Accelerator networks from <a href='https://www.tampabaywave.org/core-membership/' className='text-blue-600 hover:underline'>Tampa Bay Wave CORE ELP</a>, <a href='https://www.livetheresidency.com/' className='text-blue-600 hover:underline'>The Residency SF's</a> <a href='https://www.calculus.house/' className='text-blue-600 hover:underline'>calculus.house</a>, and <a href='https://peachscore.com/' className='text-blue-600 hover:underline'>Peachscore</a>.</li>
        </ul>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">About the founder</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>built data & ml products accounting for $100M+ in revenue</li>
          <li>Open-sourced virtual cells AI platform with 30K+ MAU</li>
          <li>ICML-and-NeurIPS-published researcher in BioML</li>
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
