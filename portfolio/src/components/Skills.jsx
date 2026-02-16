import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
        { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" }
    ];

    // Duplicate skills array for seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section id="skills" className="section-spacing border-b border-black/10 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical Palette
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-heading"
                >
                    Software & Technologies
                </motion.h2>

                {/* Infinite Sliding Marquee */}
                <div className="relative mt-16">
                    <motion.div
                        className="flex gap-10"
                        animate={{
                            x: [0, -1200],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedSkills.map((skill, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 shrink-0 group">
                                <div className="w-24 h-24 inbio-shadow rounded-2xl flex items-center justify-center p-5 bg-[#212428] hover:bg-gradient-to-br from-[#212428] to-[#1a1d21] transition-all duration-300">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-[#878e99] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
