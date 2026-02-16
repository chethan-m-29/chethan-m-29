import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import Parallax from './Parallax';

const PortfolioGrid = () => {
    const projects = [
        {
            title: "E-Commerce Infrastructure Scaling",
            cat: "Web Development",
            impact: "30% Performance Gain",
            img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Enterprise Ledger Automation",
            cat: "AI & Automation",
            impact: "98% Manual Reduction",
            img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Deep Fake Detection System",
            cat: "Computer Vision",
            impact: "95% Accuracy Rate",
            img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.1
            }
        }
    };

    return (
        <section id="portfolio" className="section-spacing border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12">
                <Parallax offset={20}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Visit my portfolio and keep your feedback
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-heading"
                    >
                        Projects
                    </motion.h2>
                </Parallax>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                >
                    {projects.map((p, i) => (
                        <Parallax key={i} offset={i % 2 === 0 ? 30 : 200} className="h-full">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="inbio-card group p-3 md:p-5 h-full"
                            >
                                <div className="relative aspect-[5/4] rounded-xl overflow-hidden mb-3 md:mb-6">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="hidden md:flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{p.cat}</span>
                                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                                        <span className="font-bold text-white/80">{p.impact}</span>
                                    </div>
                                </div>

                                <h3 className="text-sm md:text-2xl font-bold leading-tight group-hover:text-accent transition-colors cursor-pointer">
                                    {p.title}
                                </h3>
                            </motion.div>
                        </Parallax>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
