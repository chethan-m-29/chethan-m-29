import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PortfolioGrid = () => {
    const projects = [
        {
            title: "E-Commerce Infrastructure Scaling",
            cat: "Web Development",
            impact: "30% Performance Gain",
            img: "https://plus.unsplash.com/premium_photo-1673306703565-df0489956488?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Enterprise Ledger Automation",
            cat: "AI & Automation",
            impact: "98% Manual Reduction",
            img: "https://plus.unsplash.com/premium_photo-1672322409559-0111100336ae?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Deep Fake Detection System",
            cat: "Computer Vision",
            impact: "95% Accuracy Rate",
            img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6adc56?q=80&w=600&auto=format&fit=crop"
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="portfolio" className="section-spacing border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12">
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="inbio-card group p-6"
                        >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-accent uppercase tracking-widest">{p.cat}</span>
                                <div className="flex items-center gap-1.5 text-white/50 text-xs">
                                    <span className="font-bold text-white/80">{p.impact}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors cursor-pointer">
                                {p.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
