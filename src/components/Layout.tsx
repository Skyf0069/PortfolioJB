import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'CV', path: '/cv' },
  { name: 'Projets', path: '/projets' },
  { name: 'Laboratoire', path: '/laboratoire' },
  { name: 'Passions', path: '/passions' },
  { name: 'Contact', path: '/contact' },
];

export function TopNavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // On englobe le tout dans une div relative pour que le menu mobile s'aligne bien dessous
    <div className="fixed top-0 left-0 right-0 z-50 mt-6 mx-auto w-[95%] md:w-fit md:max-w-[95%]">
      
      {/* Barre de navigation principale (Pilule) */}
      <nav className="flex items-center justify-between px-8 py-3 bg-surface-variant/40 backdrop-blur-3xl rounded-full border-t border-l border-white/20 shadow-[0_40px_60px_-5px_rgba(80,40,174,0.08)] relative z-20">
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-2xl font-black tracking-tighter text-on-surface dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skynium
          </Link>
          
          {/* Liens Desktop (Cachés sur mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-sans font-bold tracking-tight uppercase text-[11px] transition-all duration-300 hover:scale-105",
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary/50 font-black"
                    : "text-on-surface-variant/70 hover:text-on-surface"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto md:ml-6">
          <button className="text-primary hover:scale-110 active:scale-90 transition-transform">
            <Globe size={20} />
          </button>
          
          {/* Bouton Hamburger (Visible que sur mobile) */}
          <button 
            className="md:hidden text-on-surface hover:text-primary transition-colors ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Déroulant */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 mt-4 p-6 bg-surface-variant/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 md:hidden z-10",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // Ferme le menu quand on clique
              className={cn(
                "font-sans font-bold tracking-tight uppercase text-[13px] py-4 px-4 rounded-xl transition-all duration-300",
                location.pathname === link.path
                  ? "bg-primary/20 text-primary"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 px-12 bg-surface border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-black tracking-tighter text-on-surface">Skynium</span>
          <p className="font-sans text-[11px] tracking-[0.05em] uppercase text-on-surface-variant">© 2019-2026 Skynium</p>
        </div>
        
        <div className="flex gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[11px] tracking-[0.05em] uppercase text-primary mb-2">Contact</span>
            <a href="mailto:jonathanb@skynium.fr" className="text-on-surface-variant hover:text-primary transition-colors">
              jonathanb@skynium.fr
            </a>
            <a href="https://www.linkedin.com/in/skynium" className="text-on-surface-variant hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="hidden sm:flex flex-col gap-2">
            <span className="font-sans text-[11px] tracking-[0.05em] uppercase text-primary mb-2">Navigation</span>
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Accueil</Link>
            <Link to="/projets" className="text-on-surface-variant hover:text-primary transition-colors">Projets</Link>
            <Link to="/laboratoire" className="text-on-surface-variant hover:text-primary transition-colors">Laboratoire</Link>
          </div>
        </div>

      </div>
      <div className="mt-16 text-center">
        <p className="text-[10px] text-outline-variant uppercase tracking-[0.2em]">Crafted with spatial intent</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopNavBar />
      <div className="flex-grow pt-24">
        {children}
      </div>
      <Footer />
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary-container/10 -top-48 -left-48" />
      <div className="orb w-[600px] h-[600px] bg-tertiary-container/5 bottom-0 -right-48" />
    </div>
  );
}