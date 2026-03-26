import { motion } from 'motion/react';
import { Music, Camera, Video, Sparkles, Mic2, Heart, ExternalLink } from 'lucide-react';

export default function Passions() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-primary mb-6 block font-bold">Au-delà de la technique</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Mes <span className="text-primary-container">Passions</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            L'équilibre entre la rigueur de l'informatique et la liberté de la création artistique. 
            Découvrez ce qui m'anime au quotidien.
          </p>
        </motion.div>
      </section>

      {/* Main Passions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Scénographie & Événementiel */}
        <div className="glass-card rounded-3xl border border-outline-variant/10 overflow-hidden group flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/stage/1200/800" 
              alt="Scénographie"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 text-primary w-fit mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Scénographie</h3>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Passionné par la création d'univers visuels pour le spectacle vivant. 
              Je m'intéresse particulièrement à la synchronisation entre la lumière, la vidéo et la musique pour créer des expériences immersives.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="Light Design" />
              <Tag text="Stage Design" />
              <Tag text="Immersive" />
            </div>
          </div>
        </div>

        {/* Réalisation Vidéo */}
        <div className="glass-card rounded-3xl border border-outline-variant/10 overflow-hidden group flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/video/1200/800" 
              alt="Réalisation Vidéo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 text-primary w-fit mb-4">
                <Video size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Réalisation Vidéo</h3>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <p className="text-on-surface-variant leading-relaxed mb-6">
              De la captation au montage, j'aime raconter des histoires par l'image. 
              Je réalise des aftermovies, des clips et des contenus promotionnels en mettant l'accent sur le rythme et l'esthétique.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="Aftermovies" />
              <Tag text="Montage" />
              <Tag text="Color Grading" />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Passions Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Musique */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 group">
          <div className="text-primary mb-6">
            <Music size={32} />
          </div>
          <h4 className="text-xl font-bold mb-4 text-white">Production Musicale</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Exploration sonore et composition sur Ableton Live. Un terrain de jeu infini pour la créativité.
          </p>
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
            <Mic2 size={14} /> 24 Tracks en cours
          </div>
        </div>

        {/* Photographie */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 group">
          <div className="text-primary mb-6">
            <Camera size={32} />
          </div>
          <h4 className="text-xl font-bold mb-4 text-white">Photographie Urbaine</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Capturer l'instant, l'architecture et les jeux de lumière dans la ville.
          </p>
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
            <Heart size={14} /> Nikon Z Series
          </div>
        </div>

        {/* Informatique */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 group">
          <div className="text-primary mb-6">
            <Sparkles size={32} />
          </div>
          <h4 className="text-xl font-bold mb-4 text-white">Veille Technologique</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Curiosité constante pour les nouvelles technologies, l'IA et les innovations hardware.
          </p>
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
            <ExternalLink size={14} /> Tech Enthusiast
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="mt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-on-surface-variant leading-relaxed">
            "La créativité, c'est l'intelligence qui s'amuse."
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>
      </section>

      {/* Decorative Orbs */}
      <div className="fixed top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-tertiary-container/5 rounded-full blur-[120px] pointer-events-none z-[-1]" />
    </main>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold border border-outline-variant/20 uppercase tracking-widest text-on-surface">
      {text}
    </span>
  );
}
