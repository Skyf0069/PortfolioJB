import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  // États pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration Projet',
    message: ''
  });

  // État pour gérer le statut de l'envoi
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Mise à jour des données quand l'utilisateur tape
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Envoi des données au Webhook n8n
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.skynium.fr/webhook/45345386-041e-4453-887d-a8e515fb097d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // On envoie les données au format JSON
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // On vide le formulaire après succès
        setFormData({ name: '', email: '', subject: 'Collaboration Projet', message: '' });
        
        // On remet le bouton à la normale après 4 secondes
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi au webhook:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

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
              href="https://www.linkedin.com/in/skynium"
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
          
          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Nom Complet</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                  className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@exemple.com"
                  className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Sujet</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors appearance-none"
              >
                <option value="Collaboration Projet">Collaboration Projet</option>
                <option value="Demande d'Expertise">Demande d'Expertise</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Votre message ici..."
                className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-5 font-black rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl
                ${status === 'success' ? 'bg-green-500 text-white shadow-green-500/20' : 
                  status === 'error' ? 'bg-red-500 text-white shadow-red-500/20' : 
                  'bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed hover:scale-[1.02] shadow-primary/20'}
              `}
            >
              {status === 'idle' && (
                <>
                  Envoyer le Message
                  <Send size={20} />
                </>
              )}
              {status === 'loading' && (
                <>
                  Envoi en cours...
                  <Loader2 size={20} className="animate-spin" />
                </>
              )}
              {status === 'success' && (
                <>
                  Message envoyé !
                  <CheckCircle size={20} />
                </>
              )}
              {status === 'error' && (
                <>
                  Erreur d'envoi
                  <XCircle size={20} />
                </>
              )}
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