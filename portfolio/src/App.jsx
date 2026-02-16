import React from 'react'
import Navbar from './components/Navbar'
import InBioHero from './components/InBioHero'
import Features from './components/Features'
import PortfolioGrid from './components/PortfolioGrid'
import Skills from './components/Skills'
import Resume from './components/Resume'

function App() {
  return (
    <div className="bg-[#212428] min-h-screen">
      <Navbar />
      <main>
        <InBioHero />
        <Features />
        <PortfolioGrid />
        <Skills />
        <Resume />
      </main>

      <footer className="py-20 border-t border-black/10 text-center" id="contact">
        <div className="container mx-auto px-6">
          <div className="w-16 h-16 rounded-full inbio-shadow flex items-center justify-center mx-auto mb-8 p-1">
            <img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt="C" className="rounded-full shadow-inner" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-[0.2em]">CHETHAN M</h3>
          <p className="text-[#878e99] text-sm tracking-widest uppercase mb-8">
            Full Stack AI Engineer
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="icon-box text-xs font-bold uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="icon-box text-xs font-bold uppercase tracking-widest">GitHub</a>
            <a href="#" className="icon-box text-xs font-bold uppercase tracking-widest">Mail</a>
          </div>
          <p className="text-[#878e99]/30 text-xs tracking-widest uppercase">
            © 2025. Architected for Performance by Chethan M
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
