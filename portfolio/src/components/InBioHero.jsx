import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Database, BrainCircuit, Terminal, Cpu, Globe } from 'lucide-react';

const InBioHero = () => {
    const socialLinks = [
        { Icon: Github, href: "https://github.com/chethan-m-29" },
        { Icon: Linkedin, href: "https://linkedin.com" },
        { Icon: Mail, href: "mailto:chethan@example.com" }
    ];

    const skillIcons = [
        { Icon: BrainCircuit, label: "Agentic AI", color: "text-[#61DAFB]" },
        { Icon: Database, label: "RAG", color: "text-[#316192]" },
        { Icon: Globe, label: "FastAPI", color: "text-[#05998b]" },
        { Icon: Cpu, label: "Fine-Tuning", color: "text-[#ff014f]" },
        { Icon: Terminal, label: "Python", color: "text-[#3776ab]" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="home" className="pt-32 pb-20 border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-7/12 space-y-8 text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.span variants={itemVariants} className="text-sm uppercase tracking-[0.3em] font-medium text-[#c4cfde] block">Welcome to my world</motion.span>
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                            Hi, I'm <span className="text-accent">Chethan M</span><br />
                            <span className="text-white">Full Stack AI Engineer.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-[#878e99] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            I architect high-performance <span className="text-white font-medium">Agentic AI</span> systems and <span className="text-white font-medium">RAG</span> pipelines at <span className="text-white">PromptIQ AI Technology</span>. I specialize in building enterprise-grade LLM solutions and <span className="text-white font-medium">FastAPI</span> backends that translate complex intelligence needs into scalable software.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-12 pt-4 justify-center lg:justify-start">
                            {/* Social Links */}
                            <div className="space-y-6">
                                <span className="text-xs uppercase tracking-widest font-bold text-[#c4cfde] block">Find with me</span>
                                <div className="flex gap-5 justify-center lg:justify-start">
                                    {socialLinks.map((social, i) => (
                                        <a key={i} href={social.href} className="icon-box" target="_blank" rel="noopener noreferrer">
                                            <social.Icon size={22} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Skills with Labels */}
                            <div className="space-y-6">
                                <span className="text-xs uppercase tracking-widest font-bold text-[#c4cfde] block">Best skill on</span>
                                <div className="flex flex-wrap gap-x-6 gap-y-6 justify-center lg:justify-start">
                                    {skillIcons.map((skill, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2">
                                            <div className="icon-box">
                                                <skill.Icon size={22} className={skill.color || ""} />
                                            </div>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#878e99]">
                                                {skill.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-5/12 relative order-1 lg:order-2 mb-12 lg:mb-0"
                    >
                        {/* Portrait - Vertically Centered */}
                        <div className="inbio-shadow rounded-2xl overflow-hidden relative z-10 bg-[#212428] aspect-[4/5] max-w-[460px] mx-auto">
                            <img
                                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                                alt="Chethan M"
                                className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-700 scale-x-[-1]"
                            />
                        </div>
                        {/* Background Shape */}
                        <div className="absolute bottom-[-20px] right-[-20px] md:bottom-[-30px] md:right-[-30px] w-full h-full max-w-[460px] mx-auto hidden md:block inbio-shadow rounded-2xl z-0" />

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InBioHero;
