import { motion } from 'motion/react';
import { Rocket, Microscope, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="relative pt-44 pb-32 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-32 text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/20">
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold">Entrepreneur & Créateur Numérique</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1]">
            <span className="block text-on-surface">La technologie au</span>
            <span className="hero-gradient">service de l'Homme.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-light">
            Bienvenue dans mon univers. Je suis <strong className="text-white">Jonathan BALBAS</strong>, fondateur de Skynium et étudiant de première année à l'IUT R&T de Luminy. 
            Passionné par l'informatique et les nouvelles technologies, je me consacre à rendre le numérique accessible et compréhensible pour tous.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/projets" className="px-8 py-3.5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              Découvrir mes travaux
            </Link>
            <Link to="/contact" className="px-8 py-3.5 glass-panel text-on-surface font-bold rounded-xl hover:bg-surface-variant/60 transition-all border border-white/10">
              Me contacter
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Portal Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Projets */}
        <Link to="/projets" className="group cursor-pointer relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center p-10">
          <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-500">
            <Rocket size={60} />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white">Mes Ambitions</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Découvrez <strong>Skynium</strong>, mon entreprise de services, 
            ainsi que mes concepts architecturaux comme la <strong>Skynium Arena</strong>.
          </p>
        </Link>

        {/* Laboratoire */}
        <Link to="/laboratoire" className="group cursor-pointer relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center p-10">
          <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-500">
            <Microscope size={60} />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white">Le Labo Technique</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Plongez dans ma "Cuisine" interne : Infrastructure SSO, 
            Domotique HomeAssistant et expérimentations réseaux.
          </p>
        </Link>

        {/* Passions */}
        <Link to="/passions" className="group cursor-pointer relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center p-10">
          <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-500">
            <Sparkles size={60} />
          </div>
          <h3 className="text-2xl font-black mb-4 text-white">Mes Inspirations</h3>
          <p className="text-on-surface-variant leading-relaxed">
            L'énergie de l'Eurovision, la précision du studio son 
            et l'art de la réalisation vidéo. Entrez dans le multivers.
          </p>
        </Link>
      </section>
    </main>
  );
}

// Custom icons for Lucide mapping
// (Removed unused custom SVG components)
