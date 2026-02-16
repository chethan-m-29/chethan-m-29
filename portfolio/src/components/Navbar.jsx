import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#212428]/90 backdrop-blur-md border-b border-black/10">
            <div className="container mx-auto px-8 lg:px-12 h-16 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 shrink-0">
                    <span className="text-2xl font-bold tracking-tighter text-white">PORTFOLIO</span>
                </div>

                {/* Navigation Section */}
                <div className="flex items-center gap-4 md:gap-10">
                    <a href={`${import.meta.env.BASE_URL}Chethan_M_Resume.pdf`} download="Chethan_M_Resume.pdf" className="text-xs uppercase font-medium tracking-widest text-[#c4cfde] hover:text-accent transition-all hidden sm:block">
                        Resume
                    </a>

                    <a href="#contact" className="inbio-shadow px-4 md:px-6 py-2.5 rounded-lg text-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-all whitespace-nowrap">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
