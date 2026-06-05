/* =====================================================================
   site.js — shared chrome: language toggle, mobile nav, scroll reveal
   Content blocks use <... lang="fr"> / <... lang="en"> toggled via CSS.
   Small UI labels use [data-i18n] with the dictionary below.
   ===================================================================== */
(function(){
  "use strict";

  const I18N = {
    fr:{
      "nav.home":"Accueil","nav.cv":"CV","nav.sae":"SAÉ","nav.labo":"Laboratoire",
      "nav.projets":"Projets","nav.passions":"Passions",
      "cta.cv":"Voir mon CV","cta.projects":"Découvrir mes projets","cta.contact":"Me contacter",
      "foot.nav":"Navigation","foot.eco":"L'écosystème","foot.connect":"Me suivre",
      "foot.rights":"Tous droits réservés.","foot.made":"Conçu avec",
      "dl.cv":"Télécharger mon CV (PDF)"
    },
    en:{
      "nav.home":"Home","nav.cv":"Résumé","nav.sae":"SAÉ","nav.labo":"Lab",
      "nav.projets":"Projects","nav.passions":"Passions",
      "cta.cv":"View my résumé","cta.projects":"Explore my projects","cta.contact":"Get in touch",
      "foot.nav":"Navigation","foot.eco":"The ecosystem","foot.connect":"Follow me",
      "foot.rights":"All rights reserved.","foot.made":"Crafted with",
      "dl.cv":"Download my résumé (PDF)"
    }
  };

  const root = document.documentElement;
  function getLang(){
    const saved = localStorage.getItem("lang");
    if(saved === "fr" || saved === "en") return saved;
    return (navigator.language||"fr").toLowerCase().startsWith("en") ? "en" : "fr";
  }

  function apply(lang){
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      if(dict[k] != null) el.textContent = dict[k];
    });
    // document title from body data attrs
    const tt = document.body.getAttribute("data-title-"+lang);
    if(tt) document.title = tt;
    // toggle button state
    document.querySelectorAll(".lang-toggle button").forEach(b=>{
      b.classList.toggle("active", b.getAttribute("data-lang")===lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang")===lang);
    });
  }

  function setLang(lang){ localStorage.setItem("lang", lang); apply(lang); }

  function initToggle(){
    document.querySelectorAll(".lang-toggle button").forEach(b=>{
      b.addEventListener("click", ()=> setLang(b.getAttribute("data-lang")));
    });
  }

  function initBurger(){
    const burger = document.querySelector(".burger");
    const links = document.querySelector(".nav-links");
    if(!burger||!links) return;
    burger.addEventListener("click", ()=> links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=> links.classList.remove("open")));
  }

  function initReveal(){
    const els = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window) || !els.length){
      els.forEach(e=>e.classList.add("in")); return;
    }
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }});
    },{threshold:.12, rootMargin:"0px 0px -8% 0px"});
    els.forEach(e=>io.observe(e));
  }

  function initYear(){
    document.querySelectorAll("[data-year]").forEach(e=> e.textContent = new Date().getFullYear());
  }

  function init(){ apply(getLang()); initToggle(); initBurger(); initReveal(); initYear(); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
