'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaDownload, FaGithub, FaFileAlt, FaServer, FaDna, FaDatabase } from 'react-icons/fa';
import { HiArrowRight, HiCheckCircle, HiCube, HiBeaker } from 'react-icons/hi';

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

export default function StartPage() {
  const steps = [
    {
      icon: <FaDownload className="w-8 h-8" />,
      title: "Install PyTDC",
      description: "Get started with a simple pip install command",
      code: "pip install pytdc-nextml"
    },
    {
      icon: <FaDna className="w-8 h-8" />,
      title: "Load a Model",
      description: "Access pre-trained foundation models with ease",
      code: `from tdc_ml import tdc_hf_interface
geneformer = tdc_hf_interface("Geneformer")
model = geneformer.load()`
    },
    {
      icon: <HiBeaker className="w-8 h-8" />,
      title: "Load Dataset",
      description: "Access curated biomedical datasets instantly",
      code: `from tdc_ml.single_pred import ADME
data = ADME(name = 'Caco2_Wang')
df = data.get_data()
splits = data.get_split()`
    }
  ];

  const quickLinks = [
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "PyPI Package",
      description: "Official PyTDC package and installation guide",
      link: "https://pypi.org/project/pytdc-nextml/",
      color: "blue"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub Repository",
      description: "Source code, examples, and community contributions",
      link: "https://github.com/apliko-xyz/PyTDC",
      color: "gray"
    },
    {
      icon: <HiCube className="w-6 h-6" />,
      title: "HuggingFace Hub",
      description: "Pre-trained models ready for download",
      link: "https://huggingface.co/collections/apliko/pytdc-nextml-67f7d938c5e59fe2e0e98d57",
      color: "orange"
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Model Server",
      description: "High-performance inference endpoints",
      link: "/models/server",
      color: "purple"
    }
  ];

  const examples = [
    {
      title: "Single-cell Perturbation Analysis",
      description: "Run inference with Geneformer on single-cell perturbation data",
      code: `from tdc_ml.multi_pred.perturboutcome import PerturbOutcome
from tdc_ml import tdc_hf_interface
import torch

dataset = "scperturb_drug_AissaBenevolenskaya2021"
data = PerturbOutcome(dataset)
adata = data.adata

# Load Geneformer model
geneformer = tdc_hf_interface("Geneformer")
model = geneformer.load()

# Tokenize data (simplified example)
# Full tokenization process available in documentation
cells = tokenizer.tokenize_cell_vectors(adata)
input_tensor = torch.tensor(cells)

# Run inference
outputs = model(input_tensor, output_hidden_states=True)`
    },
    {
      title: "ADME Property Prediction",
      description: "Load and work with drug absorption datasets",
      code: `from tdc_ml.single_pred import ADME

# Load Caco-2 permeability dataset
data = ADME(name='Caco2_Wang')
df = data.get_data()
splits = data.get_split()

# Access train, validation, test splits
train_data = splits['train']
val_data = splits['val'] 
test_data = splits['test']

print(f"Training samples: {len(train_data)}")
print(f"Features: {list(df.columns)}")`
    },
    {
      title: "Multi-instance Prediction",
      description: "Work with drug-drug interaction datasets",
      code: `from tdc_ml.multi_pred import DDI

# Load drug-drug interaction dataset
data = DDI(name='DeepDDI')
df = data.get_data()

# Get data splits
splits = data.get_split()

# Access drug pairs and interaction labels
drug_pairs = df[['Drug1', 'Drug2']]
interactions = df['Y']

print(f"Drug pairs: {len(drug_pairs)}")
print(f"Interaction types: {interactions.unique()}")`
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
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
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8"
            >
              <HiCheckCircle className="w-4 h-4 mr-2" />
              Ready to Use • Open Source • Production Ready
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="text-gray-800">Get Started with</span>
              <br />
              <span className="gradient-text">PyTDC</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Build biomedical AI applications in minutes with our comprehensive platform 
              for single-cell analysis, drug discovery, and foundation model deployment
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-gray-900 text-white px-8 py-4 rounded-xl font-mono text-lg">
                pip install pytdc-nextml
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Steps */}
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
              Three Steps to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with PyTDC in under 5 minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <div className="bg-gray-900 text-white p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <HiArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
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
              Essential Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build amazing biomedical AI applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                target={link.link.startsWith('http') ? '_blank' : '_self'}
                rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-${link.color}-300 hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-${link.color}-100 rounded-xl flex items-center justify-center text-${link.color}-600 mb-4`}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <div className={`flex items-center text-${link.color}-600 font-medium`}>
                  Learn More
                  <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
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
              Code Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See PyTDC in action with real-world examples from the platform
            </p>
          </motion.div>

          <div className="space-y-12">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{example.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{example.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://pypi.org/project/pytdc-nextml/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Install Package
                    </a>
                    <a
                      href="https://github.com/apliko-xyz/PyTDC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                
                <div className={`bg-gray-900 rounded-2xl p-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <pre className="text-sm text-white overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-6"
            >
              Ready to Transform Your Research?
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-10 opacity-90"
            >
              Join thousands of researchers and developers using PyTDC to accelerate biomedical AI discovery
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://github.com/apliko-xyz/PyTDC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 mr-3" />
                Star on GitHub
              </a>
              
              <a
                href="https://pypi.org/project/pytdc-nextml/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <FaFileAlt className="w-5 h-5 mr-3" />
                Install Package
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
