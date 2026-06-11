/* footer.js — shared footer injected into #footer-placeholder on every page */
(function(){
  "use strict";
  var el = document.getElementById("footer-placeholder");
  if(!el) return;
  el.innerHTML = [
'<div class="footer-inner">',
'  <div class="footer-top">',
'    <div class="footer-brand">',
'      <span class="serif">United By Music</span>',
'      <p lang="fr">Portfolio de <strong>Jonathan BALBAS</strong> — fondateur de Skynium, étudiant BUT R&amp;T. La technologie au service de l\'Humain, avec l\'énergie de l\'Eurovision.</p>',
'      <p lang="en">Portfolio of <strong>Jonathan BALBAS</strong> — founder of Skynium, Networks &amp; Telecom student. Technology in service of people, with Eurovision energy.</p>',
'    </div>',
'    <div>',
'      <h4 data-i18n="foot.nav">Navigation</h4>',
'      <ul class="footer-links">',
'        <li><a href="index.html" data-i18n="nav.home">Accueil</a></li>',
'        <li><a href="cv.html" data-i18n="nav.cv">CV</a></li>',
'        <li><a href="sae.html" data-i18n="nav.sae">SAÉ</a></li>',
'        <li><a href="labo.html" data-i18n="nav.labo">Laboratoire</a></li>',
'        <li><a href="projets.html" data-i18n="nav.projets">Projets</a></li>',
'        <li><a href="passions.html" data-i18n="nav.passions">Passions</a></li>',
'        <li><a href="manifeste.html" data-i18n="nav.why">Manifeste</a></li>',
'      </ul>',
'    </div>',
'    <div>',
'      <h4 data-i18n="foot.eco">L\'écosystème</h4>',
'      <ul class="footer-links">',
'        <li><a href="https://groupe-skynium.com" target="_blank" rel="noopener">Groupe Skynium ↗</a></li>',
'        <li><a href="https://skynium.fr" target="_blank" rel="noopener">Skynium ↗</a></li>',
'        <li><a href="https://abovethesky.fr" target="_blank" rel="noopener">Above The Sky ↗</a></li>',
'      </ul>',
'      <h4 style="margin-top:24px" data-i18n="foot.connect">Me suivre</h4>',
'      <ul class="footer-links">',
'        <li><a href="https://www.linkedin.com/in/skynium/" target="_blank" rel="noopener">',
'          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg> LinkedIn ↗</a></li>',
'      </ul>',
'    </div>',
'  </div>',
'  <div class="footer-bottom">',
'    <span>© <span data-year>2025</span> Skynium · Jonathan BALBAS · <span data-i18n="foot.rights">Tous droits réservés.</span></span>',
'    <span><span data-i18n="foot.made">Conçu avec</span> <span class="ubm">United By Music ♥</span></span>',
'  </div>',
'  <p class="footer-legal" lang="fr"><em>Mentions légales :</em> « Eurovision Song Contest », « United By Music », le logo en forme de cœur et les visuels associés sont des marques déposées de l\'<strong>Union Européenne de Radio-Télévision (UER/EBU)</strong>. Ils sont évoqués ici à titre purement descriptif et esthétique, dans le cadre d\'un portfolio étudiant non commercial (usage loyal / <em>fair use</em>). Ce site n\'a aucune affiliation, partenariat ni lien officiel avec l\'UER, l\'Eurovision ou les marques tierces citées (Infomaniak™, Auth0™, HomeAssistant™, etc.), qui demeurent la propriété de leurs détenteurs respectifs. Les illustrations de personnages (avatars « Mii ») proviennent du jeu <strong>Tomodachi Life : Une vie de rêve</strong>, © Nintendo — tous droits réservés à Nintendo. Ces images sont utilisées exclusivement dans le cadre de ce portfolio, sous droit d\'auteur Skynium, et ne peuvent être réutilisées en aucun cas.</p>',
'  <p class="footer-legal" lang="en"><em>Legal notice:</em> "Eurovision Song Contest", "United By Music", the heart logo and related visuals are registered trademarks of the <strong>European Broadcasting Union (EBU)</strong>. They are referenced here purely descriptively and aesthetically, within a non-commercial student portfolio (fair use). This site has no affiliation, partnership or official link with the EBU, Eurovision, or the third-party brands mentioned (Infomaniak™, Auth0™, HomeAssistant™, etc.), which remain the property of their respective owners. Character illustrations (“Mii” avatars) come from the game <strong>Tomodachi Life</strong>, © Nintendo — all rights reserved to Nintendo. These images are used exclusively within this portfolio, under Skynium copyright, and may not be reused under any circumstances.</p>',
'</div>'
  ].join("");
})();
