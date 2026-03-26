import { motion } from 'motion/react';
import { Terminal, School, Briefcase, Languages, Award, Heart, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    year: '2026 — Présent',
    company: 'E.Leclerc',
    role: 'Employé Polyvalent',
    description: "Rangement, service client, gestion des stocks et mise en rayon.",
    tags: ['Service Client', 'Logistique'],
    align: 'right'
  },
  {
    year: '2025 — Présent',
    company: 'Above The Sky Productions',
    role: 'Réalisateur de film',
    description: "Réalisation de 6 courts/moyens métrages. Expertise en montage, étalonnage et mixage sonore.",
    tags: ['Réalisation', 'Post-Production', 'VFX'],
    align: 'left'
  },
  {
    year: '2019 — Présent',
    company: 'Skynium',
    role: 'Création d\'entreprise (Auto-entrepreneur)',
    description: "Assistance, dépannage, maintenance informatique et lutte contre la fracture numérique.",
    tags: ['Maintenance', 'Dépannage', 'Pédagogie'],
    align: 'right'
  }
];

export default function CV() {
  return (
    <main className="pt-32 pb-20 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(105,69,199,0.15)_0%,_rgba(20,18,24,0)_70%)] -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Curriculum Vitae</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Jonathan BALBAS
          </h1>
          <p className="text-primary text-xl font-bold mb-6 uppercase tracking-widest">Étudiant & Entrepreneur individuel</p>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Passionné par l'informatique et la création audiovisuelle, je combine compétences techniques (SysAdmin, Hardware) et sensibilité artistique. 
            Fondateur de Skynium, je cherche à mettre mon savoir-faire au service de projets ambitieux. 
            Le BUT R&T me permet d'approfondir mes connaissances dans un cadre que j'apprécie énormément.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid: Expertise & Formations */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {/* Competences Card */}
        <div className="md:col-span-2 glass-card rounded-xl p-10 border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
            <Terminal className="text-primary" />
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillGroup title="Hardware" description="Maintenance & Diagnostic" />
            <SkillGroup title="Réseaux" description="Infrastructure & IoT (Zigbee)" />
            <SkillGroup title="SysAdmin" description="Auth0, SSO, Sécurité" />
            <SkillGroup title="Web" description="HTML / CSS" />
            <SkillGroup title="Vidéo" description="Montage & Post-prod" />
            <SkillGroup title="Audio" description="MAO & Mixage" />
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              Logiciels maîtrisés
            </h3>
            <div className="flex flex-wrap gap-3">
              <SoftwareTag name="HomeAssistant" />
              <SoftwareTag name="Final Cut Pro" />
              <SoftwareTag name="DaVinci Resolve" />
              <SoftwareTag name="Office 365" />
              <SoftwareTag name="Infomaniak" />
              <SoftwareTag name="VS Code" />
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="glass-card rounded-xl p-10 border border-white/5 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <School className="text-primary" />
              Formations
            </h2>
            <div className="space-y-8">
              <EducationItem 
                title="BUT R&T" 
                school="IUT de Luminy, Marseille" 
                period="2025 — Présent" 
                detail="Projet: Skynium Student Hub"
              />
              <EducationItem 
                title="Baccalauréat Général" 
                school="Lycée Adam de Craponne" 
                period="2022 — 2025" 
                detail="Maths, NSI, SI. Mention AB. Projets: Skynium Teacher, Robo Sumo"
              />
              <EducationItem 
                title="Brevet des Collèges" 
                school="Collège Joseph d'Arbaud" 
                period="2019 — 2022" 
                detail="Mention AB. Projets: Skynium Teacher, Vidéo contre le harcèlement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section: Expériences */}
      <section className="max-w-4xl mx-auto relative px-4">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">Expériences Professionnelles</h2>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-32 bottom-0 w-0.5 timeline-line opacity-30 hidden md:block" />
        
        <div className="space-y-24">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Soft Skills & Languages */}
      <section className="max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-10 border border-white/5">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
            <Heart className="text-primary" />
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <SoftSkillItem text="Curieux" />
            <SoftSkillItem text="Pédagogue" />
            <SoftSkillItem text="Persévérant" />
            <SoftSkillItem text="Esprit d'initiative" />
            <SoftSkillItem text="Travail en équipe" />
          </div>
        </div>

        <div className="glass-card rounded-xl p-10 border border-white/5">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
            <Languages className="text-primary" />
            Langues & Certifications
          </h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-on-surface font-bold">Français</span>
              <span className="text-primary text-sm font-bold uppercase">Maternelle</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface font-bold">Anglais</span>
              <span className="text-primary text-sm font-bold uppercase">Niveau B1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface font-bold">Espagnol</span>
              <span className="text-on-surface-variant text-sm">Notions</span>
            </div>
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-sm text-on-surface">
                <Award size={16} className="text-primary" />
                <span>Make Academy (Automatisation)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface">
                <Award size={16} className="text-primary" />
                <span>Certifications Cisco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile / Call to Action Section */}
      <section className="max-w-6xl mx-auto mt-32">
        <div className="relative rounded-xl overflow-hidden glass-card border border-white/5 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-tertiary-container/20 blur-[120px] rounded-full" />
          <div className="relative w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20 p-1">
            <img 
              alt="Jonathan B." 
              className="w-full h-full object-cover rounded-full" 
              src="https://picsum.photos/seed/portrait/400/400" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-4xl font-black mb-4 text-white">Prêt pour de nouveaux défis</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mb-8">
              À la recherche d'opportunités stimulantes dans le domaine des réseaux, de l'innovation logicielle ou de la production audiovisuelle.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container rounded-full text-on-primary-fixed font-bold hover:scale-105 transition-transform" href="mailto:skyniumjonathan@gmail.com">
                Me contacter
              </a>
              <button className="px-8 py-3 glass-card rounded-full text-on-surface font-bold hover:bg-white/10 transition-colors">
                Télécharger le CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillGroup({ title, description }: any) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-[10px] text-primary uppercase tracking-widest font-bold">{title}</span>
      <p className="font-bold text-white">{description}</p>
    </div>
  );
}

function SoftwareTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-xs font-bold text-on-surface border border-white/5">
      {name}
    </span>
  );
}

function SoftSkillItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-on-surface-variant">
      <CheckCircle2 size={16} className="text-primary" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function EducationItem({ title, school, period, detail }: any) {
  return (
    <div className="group">
      <p className="text-primary font-bold group-hover:translate-x-1 transition-transform">{title}</p>
      <p className="text-sm text-on-surface font-medium">{school}</p>
      <p className="font-sans text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider">{period}</p>
      {detail && <p className="text-xs text-on-surface-variant mt-2 italic leading-relaxed">{detail}</p>}
    </div>
  );
}

function TimelineItem({ year, company, role, description, tags, align }: any) {
  const isRight = align === 'right';
  
  return (
    <div className={`relative flex items-center justify-between group ${isRight ? '' : 'md:flex-row-reverse'}`}>
      <div className={`w-[42%] hidden md:block ${isRight ? 'text-right pr-12' : 'text-left pl-12'}`}>
        <span className="font-sans text-[11px] uppercase tracking-widest text-primary mb-2 block font-bold">{year}</span>
        <h3 className="text-2xl font-black mb-2 text-white">{company}</h3>
        <p className="text-on-surface-variant italic">{role}</p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10 shadow-[0_0_20px_rgba(206,189,255,0.6)] z-10 hidden md:block" />

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
        viewport={{ once: true }}
        className={`md:w-[42%] w-full glass-card rounded-xl p-8 border border-white/5 group-hover:scale-[1.02] transition-transform duration-500 ${isRight ? 'md:ml-12' : 'md:mr-12'}`}
      >
        <div className="md:hidden mb-4">
          <span className="font-sans text-[11px] uppercase tracking-widest text-primary font-bold">{year}</span>
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-on-surface-variant italic text-sm">{role}</p>
        </div>
        <p className="text-on-surface-variant leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-primary">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
