import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, BrainCircuit, Zap, Layers } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Agentic AI Systems",
            desc: "Architecting autonomous AI agents capable of complex reasoning and task execution using modern orchestration frameworks.",
            Icon: BrainCircuit
        },
        {
            title: "RAG Pipeline Design",
            desc: "Building high-accuracy Retrieval Augmented Generation systems with specialized vector database integrations.",
            Icon: Database
        },
        {
            title: "LLM Fine-Tuning",
            desc: "Optimizing open-source models for domain-specific tasks to achieve enterprise-grade accuracy and efficiency.",
            Icon: Cpu
        },
        {
            title: "FastAPI Development",
            desc: "Building ultra-fast, modern backend APIs with Python/FastAPI designed for high-concurrency AI workloads.",
            Icon: Zap
        },
        {
            title: "System Architecture",
            desc: "Designing scalable, distributed systems that integrate AI capabilities seamlessly into existing enterprise ecosystems.",
            Icon: Layers
        },
        {
            title: "Full Stack AI Apps",
            desc: "Developing end-to-end applications that leverage React and FastAPI to deliver intelligent user experiences.",
            Icon: Code2
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="features" className="section-spacing border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Features
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-heading"
                >
                    What I Do
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                >
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="inbio-card group hover:bg-gradient-to-br from-accent to-[#ff014f]/80 p-4 md:p-10"
                        >
                            <div className="mb-3 md:mb-8 text-accent group-hover:text-white transition-colors">
                                <f.Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
                            </div>
                            <h3 className="text-sm md:text-2xl font-bold mb-0 md:mb-5 group-hover:text-white transition-colors">{f.title}</h3>
                            <p className="text-lg text-[#878e99] group-hover:text-white/80 transition-colors leading-relaxed hidden md:block">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
