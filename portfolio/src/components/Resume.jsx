import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    const experiences = [
        {
            company: "PromptIQ AI Technology",
            role: "Full Stack AI Engineer",
            date: "2026 - Present",
            summary: "Leading Agentic AI implementation and RAG pipeline optimization using FastAPI for enterprise scale."
        },
        {
            company: "Varcon's Technologies",
            role: "Backend Intern",
            date: "2023 - 2024",
            summary: "Developed high-performance backends and automated system workflows using FastAPI and Python."
        }
    ];

    const education = [
        {
            school: "University Graduate",
            degree: "B.E. Computer Science",
            date: "Graduated",
            summary: "Focused on AI Research, System Architecture, and LLM optimization. CGPA: 8.0"
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "circOut"
            }
        }
    };

    return (
        <section id="resume" className="section-spacing border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Professional Trajectory
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-heading"
                >
                    Experience
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Experience Column */}
                    <div className="space-y-10">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-accent"
                        >
                            Experience
                        </motion.h3>
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="inbio-card relative"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-2xl font-bold">{exp.company}</h4>
                                        <span className="text-xs uppercase tracking-widest text-[#878e99]">{exp.role}</span>
                                    </div>
                                    <span className="bg-accent/10 text-accent px-3 py-1 rounded text-xs font-bold uppercase">{exp.date}</span>
                                </div>
                                <p className="text-[#878e99] leading-relaxed">{exp.summary}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education Column */}
                    <div className="space-y-10">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-accent"
                        >
                            Education
                        </motion.h3>
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="inbio-card"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-2xl font-bold">{edu.school}</h4>
                                        <span className="text-xs uppercase tracking-widest text-[#878e99]">{edu.degree}</span>
                                    </div>
                                    <span className="bg-accent/10 text-accent px-3 py-1 rounded text-xs font-bold uppercase">{edu.date}</span>
                                </div>
                                <p className="text-[#878e99] leading-relaxed">{edu.summary}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
