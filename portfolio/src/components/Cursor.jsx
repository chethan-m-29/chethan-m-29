import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position state for the main dot (instant)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring physics for the trailing outline (smooth)
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        // Add hover effect listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // MutationObserver to attach listeners to dynamically added elements
        const observer = new MutationObserver((mutations) => {
            const newElements = document.querySelectorAll('a, button, .cursor-pointer');
            newElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference">
            {/* Main Dot - Instant Follow */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ x: mouseX, y: mouseY }}
            />

            {/* Glow Effect - "Lights up" the area */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,1,79,0.15),transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] mix-blend-screen"
                style={{ x: springX, y: springY }}
            />

            {/* Trailing Ring - Smooth Spring Follow */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-accent/80 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none box-border backdrop-blur-[1px]"
                style={{ x: springX, y: springY }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? "rgba(255, 1, 79, 0.1)" : "transparent",
                    borderColor: isHovered ? "rgba(255, 1, 79, 0.2)" : "rgba(255, 1, 79, 0.8)",
                    borderWidth: isHovered ? "1px" : "2px"
                }}
                transition={{ duration: 0.2 }}
            />
        </div>
    );
};

export default Cursor;
