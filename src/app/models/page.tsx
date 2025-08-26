'use client';

import { motion } from 'framer-motion';
import { FaDna, FaDownload, FaExternalLinkAlt, FaFileAlt, FaServer } from 'react-icons/fa';
import { HiArrowRight, HiCube } from 'react-icons/hi';
import Link from 'next/link';
import yaml from 'js-yaml';
import { useEffect, useState } from 'react';

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

interface Model {
  name: string;
  description: string;
  modalities: string[];
  paper: string;
  huggingface_tdc?: string;
  huggingface_apliko?: string;
  parameters?: string;
  downloads_tdc?: number;
  downloads_apliko?: number;
  pipeline_tag?: string;
  note?: string;
}

interface ModelsData {
  categories: {
    name: string;
    description: string;
    models: Model[];
  }[];
  model_server: {
    name: string;
    description: string;
    features: string[];
    github: string;
    pypi: string;
  };
  hub: {
    huggingface_collection: string;
    apliko_org: string;
    tdc_org: string;
    description: string;
  };
}

export default function ModelsPage() {
  const [modelsData, setModelsData] = useState<ModelsData | null>(null);

  useEffect(() => {
    // In a real app, this would be loaded from the YAML file
    // For now, we'll use the data directly
    const data: ModelsData = {
      categories: [{
        name: "Single-cell Foundation Models",
        description: "Large-scale foundation models for single-cell genomics and multi-omics data analysis",
        models: [
          {
            name: "scGPT",
            description: "scGPT is a generative pre-trained transformer model specifically designed for single-cell RNA sequencing (scRNA-seq) data. It leverages the power of transformer architectures to capture the intricate relationships between genes and cells, enabling accurate cell type identification, differential expression analysis, and trajectory inference.",
            modalities: ["Gene Expression", "Single-cell RNA-seq"],
            paper: "https://doi.org/10.1038/s41592-024-02201-0",
            huggingface_tdc: "https://huggingface.co/tdc/scGPT",
            huggingface_apliko: "https://huggingface.co/apliko/scGPT",
            parameters: "50.8M",
            downloads_tdc: 219,
            downloads_apliko: 15
          },
          {
            name: "Geneformer",
            description: "Geneformer is a foundational transformer model pretrained on a large-scale corpus of single cell transcriptomes to enable context-aware predictions in settings with limited data in network biology.",
            modalities: ["Gene Expression", "Single-cell Transcriptomics"],
            paper: "https://doi.org/10.1038/s41586-023-06139-9",
            huggingface_tdc: "https://huggingface.co/tdc/Geneformer",
            huggingface_apliko: "https://huggingface.co/apliko/Geneformer",
            parameters: "151.3M",
            downloads_tdc: 1202,
            downloads_apliko: 22,
            pipeline_tag: "fill-mask"
          },
          {
            name: "scVI",
            description: "Single-cell variational inference (scVI) is a powerful tool for the probabilistic analysis of single-cell transcriptomics data. It uses deep generative models to address technical noise and batch effects, providing a robust framework for various downstream analysis tasks.",
            modalities: ["Gene Expression", "Single-cell RNA-seq"],
            paper: "https://doi.org/10.1038/s41592-018-0229-2",
            huggingface_apliko: "https://huggingface.co/apliko/scVI",
            downloads_apliko: 0,
            note: "To load the pre-trained model, use the Files and Versions tab files."
          }
        ]
      }],
      model_server: {
        name: "PyTDC Model Server",
        description: "High-performance inference server for biomedical AI models providing unified access to model weights across distributed repositories",
        features: [
          "REST API endpoints for model inference",
          "Unified access to model weights from HuggingFace Model Hub",
          "Chan-Zuckerberg CELLxGENE Census fine-tuned models",
          "TDC storage integration",
          "Model classes and tokenizer functions",
          "PyTorch and Hugging Face Transformers support",
          "Extracted embeddings for downstream tasks",
          "Pre-computed embedding storage",
          "Scalable deployment architecture",
          "Monitoring and logging capabilities"
        ],
        github: "https://github.com/apliko-xyz/PyTDC",
        pypi: "https://pypi.org/project/pytdc-nextml/"
      },
      hub: {
        huggingface_collection: "https://huggingface.co/collections/apliko/pytdc-nextml-67f7d938c5e59fe2e0e98d57",
        apliko_org: "https://huggingface.co/apliko",
        tdc_org: "https://huggingface.co/tdc",
        description: "PyTDC: A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models"
      }
    };
    setModelsData(data);
  }, []);

  if (!modelsData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

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
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">Foundation Models</span>
              <br />
              <span className="text-gray-800">for Biomedical AI</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Access state-of-the-art single-cell foundation models and biomedical AI models 
              through our unified platform and model server
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hub Links Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.a
              href={modelsData.hub.huggingface_collection}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <HiCube className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">PyTDC Collection</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete collection of PyTDC models on HuggingFace</p>
              <div className="flex items-center text-orange-600 font-medium">
                View Collection
                <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            <motion.a
              href={modelsData.hub.apliko_org}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <FaExternalLinkAlt className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Apliko Organization</h3>
              </div>
              <p className="text-gray-600 mb-4">Official PyTDC models and fine-tuned variants</p>
              <div className="flex items-center text-blue-600 font-medium">
                Browse Models
                <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            <motion.a
              href={modelsData.hub.tdc_org}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <FaDna className="w-7 h-7 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">TDC Organization</h3>
              </div>
              <p className="text-gray-600 mb-4">Original TDC models and base implementations</p>
              <div className="flex items-center text-purple-600 font-medium">
                Explore TDC
                <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Models Section */}
      {modelsData.categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">{category.name}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.models.map((model, modelIndex) => (
                <motion.div
                  key={modelIndex}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: modelIndex * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <FaDna className="w-6 h-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">{model.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{model.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Modalities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {model.modalities.map((modality, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {modality}
                          </span>
                        ))}
                      </div>
                    </div>

                    {model.parameters && (
                      <div className="mb-4">
                        <span className="text-sm text-gray-600">Parameters: </span>
                        <span className="text-sm font-medium text-gray-800">{model.parameters}</span>
                      </div>
                    )}

                    <div className="space-y-2 mb-4">
                      {model.huggingface_tdc && (
                        <div className="flex items-center justify-between">
                          <a
                            href={model.huggingface_tdc}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                            TDC HuggingFace
                          </a>
                          {model.downloads_tdc && (
                            <span className="flex items-center text-xs text-gray-500">
                              <FaDownload className="w-3 h-3 mr-1" />
                              {model.downloads_tdc}
                            </span>
                          )}
                        </div>
                      )}
                      
                      {model.huggingface_apliko && (
                        <div className="flex items-center justify-between">
                          <a
                            href={model.huggingface_apliko}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-orange-600 hover:text-orange-800 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                            Apliko HuggingFace
                          </a>
                          {model.downloads_apliko !== undefined && (
                            <span className="flex items-center text-xs text-gray-500">
                              <FaDownload className="w-3 h-3 mr-1" />
                              {model.downloads_apliko}
                            </span>
                          )}
                        </div>
                      )}
                      
                      <a
                        href={model.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-green-600 hover:text-green-800 transition-colors"
                      >
                        <FaFileAlt className="w-3 h-3 mr-2" />
                        Research Paper
                      </a>
                    </div>

                    {model.note && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">{model.note}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Model Server Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-6">
              <FaServer className="w-12 h-12 text-purple-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">{modelsData.model_server.name}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{modelsData.model_server.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Features</h3>
              <div className="space-y-3">
                {modelsData.model_server.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-semibold mb-6">Quick Start</h3>
              <pre className="text-sm bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>{`# Install PyTDC
pip install pytdc-nextml

# Load a model using HuggingFace interface
from tdc_ml import tdc_hf_interface

# Load Geneformer model
geneformer = tdc_hf_interface("Geneformer")
model = geneformer.load()

# For dataset loading
from tdc_ml.single_pred import ADME
data = ADME(name = 'Caco2_Wang')
df = data.get_data()`}</code>
              </pre>
              
              <div className="flex space-x-4 mt-6">
                <a
                  href={modelsData.model_server.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://pypi.org/project/pytdc-nextml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaFileAlt className="w-4 h-4 mr-2" />
                  PyPI
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
