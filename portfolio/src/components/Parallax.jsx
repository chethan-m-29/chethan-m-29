import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // [0, 1] maps to viewport [start end, end start]
    // 0-30%: Float in
    // 30-70%: Lock to grid (0 offset)
    // 70-100%: Float out
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [offset, 0, 0, -offset]);

    // Rotation also plateaus
    const rotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 0, offset / 20]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y, rotate }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Parallax;
