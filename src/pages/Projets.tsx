import { motion } from 'motion/react';
import { Rocket, ArrowRight, Building2, Trophy, Film, Camera, Monitor } from 'lucide-react';

export default function Projets() {
  return (
    <main className="relative pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary font-bold">Portfolio & Visions</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-none">
            Mes Ambitions
          </h1>
        </motion.div>
        <p className="mt-8 text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
          Une exploration technologique et créative à travers trois piliers fondamentaux de l'écosystème Skynium.
        </p>
      </header>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Project 1: Skynium */}
        <section className="md:col-span-12 group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-high glass-card p-1 border-t border-white/10 transition-all duration-500 h-[500px]">
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/skynium/1920/1080" 
                alt="Skynium"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-primary-container text-on-primary-fixed">
                  <Rocket size={24} />
                </span>
                <span className="font-sans text-[11px] tracking-widest uppercase font-bold text-primary">Services & Maintenance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Skynium</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mb-8 leading-relaxed">
                Depuis 2019 (officiellement 2025), Skynium a pour mission de réconcilier les utilisateurs avec l'informatique. 
                Nous proposons des services de réparation, de maintenance et une assistance personnalisée pour lutter contre la fracture numérique.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold flex items-center gap-2 hover:opacity-90 transition-all">
                  En savoir plus
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: Skynium Arena */}
        <section className="md:col-span-7 group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-high glass-card p-1 border-t border-white/10 transition-all duration-500 h-[600px]">
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                src="https://picsum.photos/seed/arena/1200/800" 
                alt="Skynium Arena"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <span className="font-sans text-[11px] tracking-widest uppercase font-bold text-tertiary self-start bg-tertiary-container/20 px-4 py-1 rounded-full backdrop-blur-md">Concept Eurovision</span>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-4 text-white">Skynium Arena</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  Né d'une passion pour l'Eurovision, ce concept allie architecture et technologie. 
                  Un modèle de rassemblement avec des jeux de lumière complexes, un système vidéo multicaméras et une scénographie immersive. 
                  Mon rêve : y accueillir un jour le concours.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-primary">
                      <Building2 size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-primary">
                      <Trophy size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-primary">
                      <Monitor size={16} />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-on-surface-variant italic">Phase: Concept & Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project 3: Above The Sky Productions */}
        <section className="md:col-span-5 group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container glass-card p-1 border-t border-white/10 transition-all duration-500 h-[600px]">
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/production/800/1200" 
                alt="Above The Sky"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col p-10">
              <div className="mb-12">
                <div className="text-primary mb-4">
                  <Film size={48} />
                </div>
                <h2 className="text-3xl font-black tracking-tight mb-4 leading-tight text-white">Above The Sky Productions</h2>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Branche créative dédiée à la production audiovisuelle. Collaboration avec des étudiants en cinéma pour réaliser des fictions ambitieuses.
                </p>
              </div>
              <div className="mt-auto space-y-4">
                <div className="p-4 rounded-lg bg-surface-container-highest/60 backdrop-blur-sm border-l-2 border-primary">
                  <div className="text-[10px] uppercase tracking-tighter text-primary font-bold mb-1">Palmarès</div>
                  <div className="text-sm font-bold text-on-surface">6 réalisations majeures</div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-highest/60 backdrop-blur-sm">
                  <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold mb-1">Highlight</div>
                  <div className="text-sm font-bold text-on-surface">Long-métrage de 2h projeté au cinéma</div>
                </div>
                <button className="w-full py-4 rounded-xl border border-outline-variant text-on-surface font-bold hover:bg-surface-variant/40 transition-colors mt-4 flex items-center justify-center gap-2">
                  <Camera size={18} />
                  Voir le Showreel
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
