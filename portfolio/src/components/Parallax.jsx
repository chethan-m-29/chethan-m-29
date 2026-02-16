import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, offset / 20]); // Slight rotation based on offset

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y, rotate }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Parallax;
