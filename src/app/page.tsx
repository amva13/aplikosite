'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFileAlt, FaRocket, FaFlask, FaDna, FaServer, FaDatabase, FaChartLine } from 'react-icons/fa';
import { HiArrowRight, HiBeaker, HiCube, HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaDna className="w-8 h-8" />,
      title: "Single-cell Foundation Models",
      description: "State-of-the-art transformer models for single-cell genomics and multi-omics analysis"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Comprehensive Datasets",
      description: "Curated datasets for drug discovery, molecular property prediction, and biomedical AI"
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Model Server",
      description: "High-performance inference server with REST API endpoints for scalable deployment"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Evaluation Framework",
      description: "Standardized benchmarks and evaluation metrics for biomedical machine learning"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8"
            >
              <HiLightningBolt className="w-4 h-4 mr-2" />
              ICML 2025 • NeurIPS 2024 • MoML 2024
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">PyTDC</span>
              <br />
              <span className="text-gray-800">Biomedical AI Platform</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              A multimodal machine learning training, evaluation, and inference platform 
              for biomedical foundation models and AI-driven drug discovery
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/start"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaRocket className="w-5 h-5 mr-3" />
                Get Started
                <HiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="https://huggingface.co/collections/apliko/pytdc-nextml-67f7d938c5e59fe2e0e98d57"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                <HiCube className="w-5 h-5 mr-3" />
                HuggingFace Hub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Accelerate Biomedical AI Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PyTDC provides researchers with cutting-edge tools and resources for developing 
              and deploying biomedical AI models at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "30K+", label: "Monthly Active Users" },
              { number: "1.4K+", label: "HuggingFace Downloads" },
              { number: "3", label: "Foundation Models" },
              { number: "50+", label: "Datasets Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Key Publications & Presentations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "PyTDC: A multimodal ML platform for biomedical foundation models",
                venue: "ICML 2025",
                type: "Conference Paper",
                link: "https://openreview.net/forum?id=HV8vZDDoYc"
              },
              {
                title: "Signals in the Cells: Multimodal ML Foundations for Therapeutics",
                venue: "NeurIPS 2024 Workshop",
                type: "Spotlight",
                link: "#"
              },
              {
                title: "TDC-2: Multimodal Foundation for Therapeutic Science",
                venue: "MoML 2024",
                type: "Conference",
                link: "#"
              }
            ].map((paper, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <FaFileAlt className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-sm text-purple-600 font-medium">{paper.type}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.venue}</p>
                <a
                  href={paper.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Read Paper
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-6 text-gray-800"
            >
              Ready to Accelerate Your Research?
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-10"
            >
              Join thousands of researchers using PyTDC for biomedical AI and drug discovery
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/start"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <HiBeaker className="w-5 h-5 mr-3" />
                Start Building
              </Link>
              
              <a
                href="https://github.com/apliko-xyz/PyTDC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 mr-3" />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">PyTDC</h3>
              <p className="text-gray-400 mb-4">
                A community platform for AI-driven drug discovery and development
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/apliko-xyz/PyTDC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/models" className="text-gray-400 hover:text-white transition">Models</Link></li>
                <li><Link href="/datasets" className="text-gray-400 hover:text-white transition">Datasets</Link></li>
                <li><Link href="/start" className="text-gray-400 hover:text-white transition">Get Started</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://pypi.org/project/pytdc-nextml/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">PyPI Package</a></li>
                <li><Link href="/papers" className="text-gray-400 hover:text-white transition">Papers</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white transition">Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="https://huggingface.co/apliko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">HuggingFace</a></li>
                <li><a href="https://github.com/apliko-xyz/PyTDC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PyTDC. Built with ❤️ for the biomedical AI community.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
