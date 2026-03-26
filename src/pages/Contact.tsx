import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <header>
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Disponibilité Immédiate</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              Entrons en <br/><span className="hero-gradient">Contact</span>
            </h1>
          </header>
          
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-md">
            Un projet en tête ? Une question technique ? N'hésitez pas à me contacter par mail ou via les réseaux sociaux.
          </p>

          <div className="space-y-6">
            <ContactItem 
              icon={<Mail size={24} />} 
              label="Email" 
              value="jonathanb@skynium.fr" 
              href="mailto:jonathanb@skynium.fr"
            />
            <ContactItem 
              icon={<Linkedin size={24} />} 
              label="LinkedIn" 
              value="Jonathan B." 
              href="#"
            />
            <ContactItem 
              icon={<MapPin size={24} />} 
              label="Localisation" 
              value="Marseille, France" 
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-10 md:p-12 rounded-3xl border border-white/10 relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Nom Complet</label>
                <input 
                  type="text" 
                  placeholder="Jean Dupont"
                  className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="jean@exemple.com"
                  className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Sujet</label>
              <select className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                <option>Collaboration Projet</option>
                <option>Demande d'Expertise</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="Votre message ici..."
                className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button className="w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-black rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20">
              Envoyer le Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

function ContactItem({ icon, label, value, href }: any) {
  const Content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
        {icon}
      </div>
      <div>
        <p className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{label}</p>
        <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{Content}</a> : Content;
}
