import { motion } from 'motion/react';
import { Network, Fingerprint, Cpu, Home, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Laboratoire() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block font-bold">Environnement de R&D</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-tight">
              Le Laboratoire <br/><span className="text-primary-container">Personnel</span>
            </h1>
          </motion.div>
          <div className="glass-card p-6 rounded-xl border border-outline-variant/20 max-w-xs">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Exploration des architectures Cloud, déploiement d'infrastructures locales et automatisation résidentielle avancée.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* IAM & SSO */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col group">
          <div className="text-primary mb-6">
            <Fingerprint size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Intégration IAM & SSO</h3>
          <p className="text-on-surface-variant mb-6 flex-grow">
            Authentification unique (SSO) fluide et sécurisée via Auth0 et Infomaniak. 
            Architecture OAuth2, manipulation d'API REST et scripts JS pour le User Mapping.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Tag text="Auth0" />
            <Tag text="OAuth2" />
            <Tag text="REST API" />
          </div>
        </div>

        {/* Domotique */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col group">
          <div className="text-primary mb-6">
            <Home size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Domotique : HomeAssistant</h3>
          <p className="text-on-surface-variant mb-6 flex-grow">
            Automatisation complète de mon environnement via HomeAssistant. 
            Protocoles Zigbee, contrôle d'éclairage adaptatif et multimédia sans dépendance au cloud.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Tag text="Zigbee" />
            <Tag text="IoT" />
            <Tag text="Automation" />
          </div>
        </div>

        {/* SSH - Emploi du temps */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col group">
          <div className="text-primary mb-6">
            <Calendar size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">SSH : Skynium Student Hub</h3>
          <p className="text-on-surface-variant mb-6 flex-grow">
            Interface web ultra-rapide pour l'emploi du temps (ADE) des étudiants IUT R&T Luminy. 
            Filtre par groupe TP/TD, 5x plus rapide que l'outil officiel.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Tag text="Backend Script" />
            <Tag text="Optimization" />
            <Tag text="IUT R&T" />
          </div>
        </div>

        {/* Infrastructure Cloud & RPi */}
        <div className="md:col-span-2 glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col md:flex-row gap-8 group">
          <div className="flex-1">
            <div className="text-primary mb-6">
              <Cpu size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Infrastructure Cloud & Raspberry Pi</h3>
            <p className="text-on-surface-variant mb-6">
              Serveur Linux autonome sur Raspberry Pi. Architecture Zero Trust avec Cloudflare Tunnel et Tailscale pour un accès distant sécurisé sans ouverture de ports.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="Linux" />
              <Tag text="Zero Trust" />
              <Tag text="Cloudflare" />
              <Tag text="Tailscale" />
            </div>
          </div>
          <div className="flex-1 bg-surface-container-highest/30 rounded-xl p-6 border border-white/5">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Statut Système</h4>
            <div className="space-y-4">
              <StatusItem label="Node RPi-01" active />
              <StatusItem label="Cloudflare Tunnel" active />
              <StatusItem label="Tailscale Mesh" active />
            </div>
          </div>
        </div>

        {/* Labo R&T */}
        <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex flex-col group">
          <div className="text-primary mb-6">
            <Network size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Labo R&T : Virtualisation</h3>
          <p className="text-on-surface-variant mb-6 flex-grow">
            Utilisation de Raspberry Pi comme hyperviseur pour des VM et conteneurs. 
            Gestion de services réseaux : DHCP, DNS (Pi-hole) et monitoring.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Tag text="Pi-hole" />
            <Tag text="Docker" />
            <Tag text="Networking" />
          </div>
        </div>
      </div>

      {/* R&D Section */}
      <section className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <ShieldCheck className="text-primary" size={32} />
          <h2 className="text-3xl font-black tracking-tight text-white">Sécurité & Fiabilité</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Approche Zero Trust</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Chaque service du laboratoire est isolé et nécessite une authentification forte. 
              L'exposition sur internet est minimisée grâce à des tunnels chiffrés point-à-point.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Monitoring Temps Réel</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Surveillance constante des ressources CPU, RAM et réseau pour anticiper les pannes 
              et optimiser les performances des services critiques comme le SSH.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-tertiary-container/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
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

function StatusItem({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low/50 border border-outline-variant/10">
      <span className="text-[10px] uppercase font-bold text-on-surface">{label}</span>
      <div className={`h-2.5 w-2.5 rounded-full ${active ? 'bg-primary shadow-[0_0_12px_rgba(206,189,255,0.5)]' : 'bg-outline-variant'}`} />
    </div>
  );
}

// Custom icons for Lucide mapping
// (Removed unused custom SVG components)
